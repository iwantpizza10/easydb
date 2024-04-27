const fs = require('fs')

/**
 * @returns returns true if it worked, false + console error if not
 */

function init() {
  var success = true
  
  try {
    var folderExists = fs.existsSync('./storage')
    var fileExists = fs.existsSync('./storage/db.easy')

    if (!folderExists) {
      fs.mkdirSync('./storage')
    }

    if (!fileExists) {
      fs.writeFileSync('./storage/db.easy', '{}') // init empty db
    }
  } catch (e) {
    console.error('easydb error:\n', e)
    success = false
  }

  return success
}

module.exports = init