'use strict'

var fs = require('fs'),
    lib = require('./lib/make');

var modulesDir = './angular-modules/';

console.log('fetching data');
var files = [
  'all',
  'lists'
].map(function(fileName) {
  var data = require('./json/'+fileName+'.json');
  return ({
    name: fileName,
    data: data
  });
});

console.log('generating a module containing all data');
var code = lib.modulariseMultiple(files);
var fileName = modulesDir+'symptoms.js';
fs.writeFile(fileName, code, function(err) {
  if (err) throw err;
  console.log(fileName+' written');
});
