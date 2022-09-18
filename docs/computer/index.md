### zsh

- 使用场景

::: danger .zshenv
.zshenv 中存放的**环境变量**配置项在任何场景下都能被读取, 这里通常把 「$PATH」、「$HOME」、「$USER」等配置项放在这里, 这样无论是在交互shell, 或者运行程序都会读取此文件
:::


::: danger .zshrc
.zshrc主要用在交互shell中, 它会在每次打开交互shell时被读取, 这里可以配置一些默认的命令, 比如「alias」、「bindkey」等等
:::

::: danger .zlogin
.zlogin是在login shell的时候读取, 比如系统启动的时候会读取此文件
:::

::: danger .zprofile
.zprofile是.zlogin的替代品, 如果使用了.zlogin就不必关心此文件
:::

读取顺序

::: danger
.zshenv → [.zprofile if login] → [.zshrc if interactive] → [.zlogin if login] → [.zlogout sometimes]
:::

```bash
a. /etc/profile
b. /etc/paths
c. ~/.bash_profile
d. ~/.bash_login
e. ~/.profile
f. ~/.bashrc
```
- a和b都是系统级别的, 系统启动就会加载, 其他的都是用户级别的  
- c,d,e按照从前往后的顺序读取, 如果c文件存在, 则后面的几个文件就会被忽略不读了,
- f, 没有上述规则, 它是 bash shell 打开的时候载入的

 一般配置到全局变量的文件都是属于应用程序, 不过如果配置到了bashrc里,再要用ide的terminal去运行它，理论上是跑不起来的，还是按照大多数人的走法去配置到~/.bash_profile里的好。

### Mac终端的zsh和base的区别

1. 从 macOS Catalina 版开始，zsh (Z shell) 是所有新建用户帐户的默认 Shell。
bash 是 macOS Mojave 及更低版本中的默认 Shell。  
2. zsh基本上兼容bash。

如果您正在使用 bash 描述文件（例如，为了设置环境变量、别名或路径变量），则您应改为使用作用与它相同的 zsh 描述文件。例如：
.zprofile 的作用与 .bash_profile 相同，并且在登录时运行（包括通过 SSH 运行）；
.zshrc 的作用与 .bashrc 相同，并针对每个新的“终端”会话运行；

### 操作步骤
- 查看shell类型
```bash
$ echo $SHELL
如果是 「/bin/zsh」就是zsh
```


### zsh和bash的区别
::: danger
bash script更加接近posix标准，zsh则更加“灵活”  
bash基本上上手即用，zsh则需要繁杂的配置（但我们有神一样的oh-my-zsh）  
二者的命令提示符不同，zsh的命令提示符可定制性更高  
zsh的自动补全功能更加强大   
zsh的拼写检查功能更强  

从一个交互式终端的角度来讲，zsh更为强大，但是作为脚本解释器，bash更加符合posix标准，因此，建议读者日常使用zsh（配合oh-my-zsh），但是使用bash做脚本解释器。
:::

```bash
切换bash chsh -s /bin/bash
切换zsh chsh -s /bin/zsh

在配置文件方面: 
bash读取的配置文件是 ~/.bash_profile
zsh读取的配置文件是 ~/.zshrc

当从bash切换为zsh时，如果不想重新配置一遍.zshrc文件，可以__在.zshrc文件中加上source ~/.bash_profile，从而直接从.bash_profile文件读取配置。
```