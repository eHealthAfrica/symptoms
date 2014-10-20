var lib = require('../lib/make'),
    assert = require('assert');
describe('the library', function() {
  it('modularises a single file', function() {
    var code = lib.modularise({
      name: 'some',
      data: {d: 'd'}
    });
    assert.equal(code, "angular.module('eHealth.symptoms', []).constant('symptoms_some', {\"d\":\"d\"});");
  });
  it('modularises a single file twice', function() {
    var file = {
      name: 'some',
      data: {d: 'd'}
    };
    var code = lib.modularise(file);
    code = lib.modularise(file);
    assert.equal(code, "angular.module('eHealth.symptoms', []).constant('symptoms_some', {\"d\":\"d\"});");
  });
  it('modularises multiple files', function() {
    var code = lib.modulariseMultiple([{
      name: 'one',
      data: {o: '1'}
    }, {
      name: 'two',
      data: {t: '2'}
    }]);
    assert.equal(code, "angular.module('eHealth.symptoms', []).constant('symptoms_one', {\"o\":\"1\"}).constant('symptoms_two', {\"t\":\"2\"});");
  });
});
