var es6code = 'let x = (n) => n + 1'
var es5code = require('@babel/core').transform(es6code,{
    presets:['@babel/env']
})
.code
console.log(es5code)