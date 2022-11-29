<end-time time="2022-11-26 17:20" />

## Electron入门笔记

### 生命周期

![生命周期图](/assets/electron/live.png)

#### 应用启动退出的事件介绍
-------------

这里把这些事情分为三部分, **App事件, BrowserWindow事件以及Renderer进程中的web事件**

---------

> App事件介绍

::: details 事件: will-finish-launching

- **返回:** event:Event

- 在windows/linux中与事件ready时机相同, 在 macOS 中相当于 NSApplication 的 applicationWillFinishLaunching 通知，也就是在
  NSApplication 开始初始化，默认的通知中心立即发起这个事件，所以一定比ready 事件早。

- **用途:** 常用于open-file和open-url监听器, 并启动崩溃报告和自动更新
  :::

::: details 事件: ready

- 返回：event: Event,launchInfo: Record<string, any>
  :::

::: details 事件：open-file[macOS]

- 应在 ready 之前对 open-file 进行监听。如果自己接管文件的打开，应该event.preventDefault()

- 触发条件：
  应用已经打开，并且通过扩展名或者 macOS 命令行中的 open 命令打开文件的时候，触发
  拖放一个文件到 Dock 但应用还没有运行的时候触发


- Windows 电脑中，需要通过主进程的 process.argv 进行解
  :::

::: details 事件：open-url

- 返回：event: Event, url: string

- 事件open-url 是系统通过 Electron 应用打开 url 时触发，如果想要自己接管打开url，应该调用event.preventDefault()。并且要在
  info.plist 中定义 url scheme，如果是 Electron Builder 打包的，可以找到 extendInfo 配置，能省去很多麻烦。
  :::

::: details 事件：activate[macOS]

- 返回：event: Event, hasVisibleWindows: boolean

- 事件activate 只会在【首次启动应用程序】、【在程序已经运行后再次打开程序】或【单击应用程序的坞站或任务栏图标时】重新激活它。如果是使用
  Cmd+Tab 切换，是不会激活的，这个时候需要did-become-active 。

- 这里的再次打开程序是，macOS 默认是让应用单例模式，如果尝试运行另外一个实例，就会 activate 已经运行的实例。
  :::

::: details 事件: did-become-active

- 返回：event: Event

- 事件did-become-active则会在切换到这个应用的时候触发，比如没有窗口的应用或者程序第一次启动。
  :::

::: details 事件: session-created

- 返回：session: Session

- 创建一个 default session，常用于网络请求环境的隔离。

:::

::: details 事件：web-contents-created

- 返回：event Event,window: BrowserWindow

- 创建 webContents 的上下文环境就绪。有可能会被初始化多次
  :::

::: details 事件：browser-window-created

- 返回：event: Event, window: BrowserWindow
- 创建一个窗口，都是依次以 session-created , web-contents-created ,browser-window-created 创建。但不知道为什么在 appready
  事件后，又触发了事件 web-contents-created。
  :::

::: details 事件：second-instance

- 返回：event: Event, argv: string[],workingDirectory: string

- 在 macOS 中大多数情况启动应用程序是单例模式，当再启动的时候，如果调用了app.requestSingleInstanceLock()
  就会在原来运行中的应用触发这个事件，新的应用可以控制是否退出。
  :::

::: details 事件：window-all-closed

- 当应用所有窗口关闭后触发，其它情况，比如app.quit、 cmd+q 或者菜单的退出，或者任何其它方式的退出软件都不会触发。
- 默认不监听这个事件，关闭所有窗口自动退出应用。一旦监听了这个事件，那么所有窗口关闭后不会退出应用，需要开发者自己控制。
  :::

::: details 事件：before-quit

- 返回：event: Event

- 中断：可以

- 任何常规尝试关闭应用的行为都会马上触发。Electron 文档中说autoUpdater.quitAndInstall()
  会关闭所有的窗口，然后调用app.quit()。
  :::

::: details 事件：will-quit

- 返回：event: Event

- 中断：可以

- 在不监听window-all-closed 时，所有的窗口都关闭后触发 will-quit。如果window-all-closed 被监听了， will-quit 被触发了
  window-all-closed 也不会被触发。
  :::

::: details 事件：quit

- 返回：event: Event, exitCode: number

- 在 Windows 系统中，如果应用程序因系统关机/重启或用户注销而关闭，那么 before-quit和 quit 事件不会被触发。
  :::

> BrowserWindow 事件介绍


::: details 事件：close

- 返回：event: Event

- 要比 Web 中的 DOM 事件 unload 和 beforeunload 要早，在一般情况下，都是通过 beforeunload 处理窗口关闭的事情：

```javascript
window.onbeforeunload = (e) => {
  console.log('I do not want to be closed')
  e.returnValue = false
}
// equivalent to `return false` but not recommended}
```

:::

::: details 事件：closed

- 返回：无

- 因为这是个异步事件，所以回调的方法无法影响 BrowserWindow 的生命周期。
  :::

::: details 事件：ready-to-show

- 返回：无

- 这个窗口属性如果是show:true，也会在没显示的时候就触发事件。
  :::

> Renderer 进程中的 Web 事件介绍

::: details 事件：window:load

- 返回：event: Event

- 在窗口开始加载的时候触发，添加监听有两种方法，下面的unlaod和beforeunload 也是一样：

```javascript
window.onload = (event: Event) => {
  console.log(event.type) // // output: load}window.addEventListener('load', (event: Event) => {  console.log(event.type)
}
```

:::

::: details 事件：window: unload

- 返回：event: Event

- unload 事件不会被中断。

- 一般情况下，Electron 退出是来不及发出 unload 事件的，只有关闭窗口和重载窗口会发出。
  :::

::: details 事件：window:beforeunload

- 返回：event: Event

- 中断：可以

- 返回非 undefined 就会中断主进程 BrowserWindow 的 close 事件在窗口重载的时候，也会被触发
  :::

::: details 事件：document: DOMContentLoaded

- 返回：event: Event

- 等所有 DOM 准备好后触发。
  :::

---------------------

