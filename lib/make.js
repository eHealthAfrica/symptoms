var mustache = require('mustache'),
    _ = require('lodash');

var startModule = "angular.module('eHealth.symptoms', [])";

function dotConstant(file) {
  var file = _.clone(file, true);
  file.name = 'symptoms_' + file.name;
  file.data = JSON.stringify(file.data);
  return mustache.render(".constant('{{name}}', {{&data}})", file);
}

module.exports = {
  modularise: function(country) {
    return startModule + dotConstant(country) + ';';
  },
  modulariseMultiple: function(files) {
    var constants = files.map(dotConstant).join('');
    return startModule + constants + ';';
  }
};
