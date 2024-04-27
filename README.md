# easydb

easydb is a simple and easy to use key-value database

there's not really anything special about it but i assume it'd save some time if you needed something like it

fun fact: easydb is a very old project back from when i was not good at programming, but i came back after 3 years and fixed it up a bit


## how to use

as i mentioned, easydb is very easy to use once imported
```js
const easydb = require('easydb.js')
easydb.init() // initializes if not already done

var value = 'testing'

easydb.save('value', value) // set easydb key 'value'

var samething = easydb.get('value') // get 'value' from easydb

console.log(samething)
// 'testing'
```


```js
const easydb = require('easydb.js')
easydb.init() // initializes if not already done

easydb.save('test', 'data') // set 'test' in easydb
console.log(easydb.get('test')) // 'data'

easydb.delete('test') // delete key 'test' from easydb
console.log(easydb.get('test')) // undefined value
```


## helpful notes

database file is stored in ./storage/db.easy relative to the easydb.js file

don't store passwords or any sensitive data that isn't already encrypted

you can write easydb.save as easydb.set with the same behavior

you must initialize the database before making any db calls (only *required* the first time, but recommended every time just in case)
