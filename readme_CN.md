## node-auto-sync
>定时自动同步fork到个人目录下的node仓库，这个包会在周一~周五的下午六点拉取node官方仓库的代码到你fork的仓库。

### 使用方法
在使用这个工具之前，请先按照node仓库中的[CONTRIBUTING.md](https://github.com/nodejs/node/blob/master/CONTRIBUTING.md#setting-up-your-local-environment)来进行相应的fork clone remote 操作。

安装node-auto-sync：
```shell
$ git clone https://github.com/xtx1130/node-auto-sync.git
```
打开自动同步功能：
```shell
$ cd node-auto-sync
$ npm run start [your local git repo]
```
例: `npm run start /Users/xtx/Desktop/workspace/node`
关闭自动同步功能：
```shell
$ cd node-auto-sync
$ npm run stop
```

### 日志
在运行定时任务之后，`node-auto-sync`文件夹下会创建两个文件：
- `AutoMakeLog.err` 错误日志会显示到这个文件中
- `AutoMakeLog.log` 普通更新日志会存储到这个文件中，每次运行会有一个时间戳
### 问题
在开发的时候，为何没用命令行：
- 这只是一个小的定时任务功能，没必要引入命令行模式进行开发。