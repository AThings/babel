"use strict";

require('@babel/polyfill');

var a = [1, 2, 3];
var b = a.map(function (item) {
  return item + 1;
});
console.log(b);
console.log(Array.from('foo'));
