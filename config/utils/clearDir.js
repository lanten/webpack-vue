const fs = require('fs')

/**
 * 清空文件夹
 *
 * @param {String} path 要清空的文件夹路径
 * @param {Boolean} delDir 清空完成后是否删除文件夹
 * @param {Boolean} creatDir 如果不存在,是否创建
 */
function clearDir(path, delDir, creatDir) {
  let files = []

  if (fs.existsSync(path)) {
    files = fs.readdirSync(path)

    files.forEach(file => {
      let curPath = path + '/' + file

      if (fs.statSync(curPath).isDirectory()) {
        clearDir(curPath)
      } else {
        fs.unlinkSync(curPath)
      }
    })

    if (delDir) fs.rmdirSync(path)
  } else if (creatDir) fs.mkdirSync(path)
}

module.exports = clearDir
