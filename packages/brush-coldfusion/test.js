var match = require('syntaxhighlighter-match');
var Brush = require('./brush');
var sample = require('fs').readFileSync('./sample.txt', 'utf8');

describe('brush-coldfusion', function() {
  var instance = null;

  before(function() {
    return instance = new Brush();
  });

  it('has populated code sample', function() {
    return expect(sample).not.toMatch(/^Populate/);
  });

  describe('instance', function() {
    return it('has `regexList`', function() {
      return expect(instance).toHaveProperty('regexList');
    });
  });

  return describe('parsing', function() {
    var matches = null;

    before(function() {
      return matches = match.applyRegexList(sample, instance.regexList);
    });

    return it('can parse', function() {
      return expect(matches.length).toBeGreaterThan(0);
    });
  });
});