const fs = require('fs')
module.exports = 
/**
 * @param {String} key The key of the value to get
 */
function(key){
    let e = fs.readFileSync('../storage/db.easy')
    e = e.split('\r\n')
    e.forEach(a => {
        a = a.toString()
        if(a.startsWith(key + '=')){
            return a.replace(key + '=', '')
        }
    })
}