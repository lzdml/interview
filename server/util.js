const fs = require('fs')
const util = require('util')
const path = require('path')
const readdirAsync = util.promisify(require('fs').readdir)
const statAsync = util.promisify(require('fs').stat)

const whiteList = ['.vitepress', 'assets', 'public', '.DS_Store'];

async function readFiles(dirs) {
  let list = await readdirAsync(dirs);
  list = list.filter(dir => whiteList.every(item => item != dir))

  const newList = list.map(async node => {
    const pathName = path.join(dirs, node);
    const desc = await statAsync(pathName);
    if (desc.isDirectory()) {
      return readFiles(pathName);
    } else if (desc.isFile()) {
      return pathName;
    }
  })
  let results = await Promise.allSettled(newList);

  return results.reduce((all, result) => {
    return result.status === 'fulfilled' && result.value ? all.concat(result.value) : all
  }, []);
}


module.exports = {
  readFiles
}