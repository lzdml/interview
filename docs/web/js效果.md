<end-time time="新增时间: 2022-12-28 10:22" />

::: details JS实现element-ui中的message提示效果

--------------

效果图


![效果图](/assets/js/image.png)

--------------

```html
<button id="button1" class="button" style="background-color:rgb(167, 167, 163);">消息</button>
<button id="button2" class="button" style="background-color: rgb(12, 199, 137);">成功</button>
<button id="button3" class="button" style="background-color: rgb(190, 188, 16);">警告</button>
<button id="button4" class="button" style="background-color: rgb(204, 20, 20);">错误</button>
```


```javascript
class Message {
  constructor() {
    this.messageQueue = []

    this.position = 'top';
    this.message = '';
    this.types = ['success', 'warning', 'error', 'info']
    this.type = '';
    this.duration = 3000;
    this.body = document.getElementsByTagName('body')[0];
    this.id = 0;
    this.zIndex = 2000;
  }

  setType(messageDom, type) {
    if (this.types.includes(type)) {
      messageDom.classList.add(`ui-message-${type}`)
    } else {
      messageDom.classList.add(`ui-message-info`)
    }
  }

  createTextDom(messageDom, message) {
    const p = document.createElement('p');
    p.classList.add('message-content');
    p.textContent = message || this.message;
    messageDom.appendChild(p);
  }

  updateMessageDom(startIndex, zIndex) {
    for (let i = startIndex; i < this.messageQueue.length; i++) {
      const messageDom = this.messageQueue[i].messageDom;
      messageDom.style.zIndex = `${zIndex + i}`;
      messageDom.style.top = `${64 * i + 20}px`;
    }
  }

  removeMessageDom(messageDom, targetId, zIndex) {
    let startIndex = this.messageQueue.findIndex(message => message.id === targetId);
    this.messageQueue.splice(startIndex, 1);
    this.updateMessageDom(startIndex, zIndex);

    messageDom.classList.add('ui-message-leave');
    setTimeout(() => {
      this.body.removeChild(messageDom);
    }, 400)
  }

  setCurrentMessageDom(zIndex) {
    const index = this.messageQueue.length - 1;
    const targetDom = this.messageQueue[index].messageDom;
    targetDom.style.zIndex = `${zIndex + index}`;
    targetDom.style.top = `${64 * index + 20}px`;
  }

  setOption(options) {
    if (typeof options !== 'object') {
      options = {}
    }
    const messageDom = document.createElement('div')
    messageDom.classList.add('ui-message')
    messageDom.classList.add('ui-message-leave')
    if (options.center) {
      messageDom.classList.add('ui-message-center')
    }

    const targetId = this.id;
    const zIndex = options.zIndex ? options.zIndex : this.zIndex;
    this.messageQueue.push({
      id: targetId,
      messageDom
    });
    this.setType(messageDom, options.type);
    this.createTextDom(messageDom, options.message);
    this.setCurrentMessageDom(zIndex);
    this.body.appendChild(messageDom);
    setTimeout(() => {
      messageDom.classList.remove('ui-message-leave')
    })
    let i = null;
    if (options.showClose) {
      i = document.createElement('i')
      i.classList.add('close-button')
      messageDom.appendChild(i)
    }
    const time = isNaN(Number(options.duration)) ? this.duration : Number(options.duration)
    let timeId = -1;
    if (time !== 0) {
      timeId = setTimeout(() => {
        this.removeMessageDom(messageDom, targetId, zIndex)
      }, time)
    }
    if (options.showClose) {
      i.addEventListener('click', () => {
        this.removeMessageDom(messageDom, targetId, zIndex);
        if (targetId !== -1) {
          clearTimeout(timeId);
        }
      })
    }
    this.id++;
  }
}

function start() {
  const button1 = document.getElementById('button1');
  const button2 = document.getElementById('button2');
  const button3 = document.getElementById('button3');
  const button4 = document.getElementById('button4');
  const message = new Message();

  button1.addEventListener('click', () => {
    message.setOption({
      type: 'info',
      duration: 2000,
      message: '点你'
    })
  })

  button2.addEventListener('click', () => {
    message.setOption({
      message: '我被点了！',
      type: "success",
      duration: 2000,
    });
  });
  button3.addEventListener('click', () => {
    message.setOption({
      message: '我被点了！',
      type: "warning",
      center: true,
      duration: 3000,
    });
  });
  button4.addEventListener('click', () => {
    message.setOption({
      message: '我被点了！',
      showClose: true,
      type: "error",
      duration: 0,
    });
  });

}
start()
```

```css
.ui-message {
  min-width: 380px;
  border-width: 1px;
  border-style: solid;
  border-color: #EBEEf5;
  background-color: #edf2fc;
  transform: translateX(-50%);
  position: fixed;
  left: 50%;
  top: 20px;
  transition: opacity .3s, transform .4s, top .5s;
  padding: 15px 15px 15px 20px;
  display: flex;
  align-items: center;
  border-radius: 4px;
  overflow: hidden;
}

.ui-message-center {
  justify-content: center;
}

.ui-message .message-content {
  margin-left: 16px;
  margin: 0;
  padding: 0;
  font-size: 14px;
  line-height: 1;
}

.ui-message .close-button {
  position: absolute;
  top: 50%;
  right: 15px;
  transform: translateY(-50%);
  cursor: pointer;
  background-image: url('./img/close.png');
  width: 12px;
  height: 12px;
  background-size: 100% 100%;
}

.ui-message-leave {
  opacity: 0;
  transform: translate(-50%, -100%);
}

.ui-message-enter {
  opacity: 1;
  transform: translate(-50%, -100%);
}

.ui-message-info .message-content {
  color: #909399;
}

.ui-message-success {
  background-color: #f0f9eb;
  border-color: #e1f3d8;
}

.ui-message-success .message-content {
  color: #67c23c;
}

.ui-message-warning {
  background-color: #fdf6ec;
  border-color: #faecd8;
}

.ui-message-warning .message-content {
  color: #e6a23c;
}

.ui-message-error {
  background-color: #fef0f0;
  border-color: #fde2e2;
}

.ui-message-error .message-content {
  color: #f56c6c;
}
```
:::

