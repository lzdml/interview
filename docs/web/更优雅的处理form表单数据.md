## 更优雅的处理form表单数据


```javascript
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Form</title>
</head>

<body>
  <form onsubmit="saveHandle(event)">
    <ul>
      <li>
        <input type="text" name="name" placeholder="请输入名称">
      </li>
      <li>
        <input type="text" name="nickName" placeholder="请输入昵称">
      </li>
      <li>
        <input type="email" name="email" placeholder="请输入邮箱">
      </li>
      <li>
        <button type="submit">保存</button>
        <button id="btn">跳转测试</button>
        <button id="btn1">结果</button>
      </li>
    </ul>
  </form>


  <script>
    function saveHandle(e) {
      console.log('e', e)
      e.preventDefault()
      const formData = new FormData(e.currentTarget)
      const data = Object.fromEntries(formData)
      console.log('data', data)
      {/* {
          "name": "杜兆林",
          "nickName": "2",
          "email": "dzlkuboy@163.com"
      } */}
    }

    btn.onclick = function (e) {
      e.preventDefault()
      window.location.href = window.location.href + '?name=1&nickName=2&age=3'
    }

    btn1.onclick = function (e) {
      e.preventDefault()
      const params = new URLSearchParams(window.location.search)

      console.log('Object.fromEntries(params)', Object.fromEntries(params))
    }
  </script>
</body>

</html>
```