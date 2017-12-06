## node-auto-sync
>after fork the node repo, make sync from the upstream automatically

### usage

Before use this tool, please fork & checkout the node repo. Do as what the node [CONTRIBUTING.md](https://github.com/nodejs/node/blob/master/CONTRIBUTING.md#setting-up-your-local-environment) said.
```shell
$ git clone https://github.com/xtx1130/node-auto-sync.git
```
*To open the auto-sync please use this :*
```shell
$ cd node-auto-sync
$ npm run start [your local git repo]
```
eg: `npm run start /Users/xtx/Desktop/workspace/node`

*To close the auto-sync please use this:*
```shell
$ cd node-auto-sync
$ npm run stop
```

### logs
After run the crontab, in the`node-auto-sync`repo will establish two files:
- `AutoMakeLog.err` The error log will show in there
- `AutoMakeLog.log` The log info will show in there, and it will have time tag

### questions
Why not use cli?  
- Because this is just a tiny crontab, I don't think must use cli to finish this tiny thing.