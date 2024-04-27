const fs = require('fs')

/**
 * @param {String} key the key to remove
 * @returns returns true if it worked, false + console error if not
 */

function remove(key) {
  var success = true

  try {
    var oldcontent = fs.readFileSync('./storage/db.easy', 'utf-8')
    var data = JSON.parse(oldcontent)

    data[key] = undefined

    var newcontent = JSON.stringify(data)
    fs.writeFileSync('./storage/db.easy', newcontent)
  } catch (e) {
    console.error('easydb error:\n', e)
    success = false
  }

  return success
}

module.exports = remove