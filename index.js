'use strict'

const fs = require('fs-extra')
const path = require('path')
const spawn = require('child_process').spawn
const plistPath = '/Library/LaunchDaemons'

let nodePath = process.argv[2]||void 0
let plistData = fs.readFileSync('./template/pListUpdate.tpl').toString()
let reg = new RegExp('\{\{path\}\}','ig')
let basePath = path.resolve('./')
if(!nodePath){
  console.log('The nodePath param is needed')
  return false;
}
plistData = plistData.replace(reg, basePath).replace(/\{\{nodepath\}\}/ig, nodePath)
let nodeplistPath = plistPath+'/com.syncNode.launchctl.plist'
fs.exists(nodeplistPath, status => {
  if(status)
	return true
  fs.writeFile(nodeplistPath, plistData, err => {
     if(err)
      console.log(err)
      return false
    })
})

let ls = spawn('sh',[basePath+'/sh/start.sh'],{
  stdio:[0, 1, 2]
})