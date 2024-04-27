const fs = require('fs')

/**
 * @param {String} key the key to fetch the value for
 * @returns returns the value if it worked, false + console error if not
 */

function get(key){
  var success = true

  try {
    var content = fs.readFileSync('./storage/db.easy', 'utf-8')
    var data = JSON.parse(content)

    return data[key] || undefined
  } catch (e) {
    console.error('easydb error:\n', e)
    success = false
    return success
  }
}

module.exports = get
