const path = require('path')
const fs = require('fs')
const util = require('util')
const statAsync = util.promisify(fs.stat)
const mkdirAsync = util.promisify(fs.mkdir)
const writeFileAsync = util.promisify(fs.writeFile)

const {
  readFiles
} = require('./util')


const search_path = path.join(__dirname, '../docs');
const fileStorage = './search_all_info.json'

async function existFile(real_path, isFolder = false) {
  const absPath = path.resolve(__dirname, real_path)

  try {
    await statAsync(absPath)
  } catch (e) {
    if (!isFolder) {
      await writeFileAsync(real_path, Array.from(arguments).slice(2)[0])
      return;
    } else {
      await mkdirAsync(absPath, {
        recursive: true
      })
    }
  }
}


let components = [];


(async function () {
  await existFile(fileStorage, false, JSON.stringify({}, null, 2))
  let files = await readFiles(search_path)

  files = files.filter(item => item.substr(-13) !== 'docs/index.md')

  files.forEach(async (res) => {
    const all_title = await fs.readFileSync(res, {
      encoding: 'utf-8'
    })
    const all_title_filter = all_title.toString('utf8').match(/^#.*\r?/mg).join(',').replace(/#+/g, '')
    components.push({
      path: res,
      title: all_title_filter
    })
  })

  process.nextTick(async function () {
    await writeFileAsync(fileStorage, JSON.stringify({
      all_search_keyword: components
    }, null, 2))
  })

})();