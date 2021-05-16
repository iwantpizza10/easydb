const fs = require('fs')
module.exports = 
/**
 * @param {String} key The datakey
 * @param {*} value The value of the record
 */
function(key, value){
    let tr = true
    try {
        let val = fs.readFileSync('../storage/db.easy')
        fs.writeFileSync('../storage/db.easy', `${val}\r\n${key}=${value}`)
    }catch(e){
        tr = false
    }
    return tr
}