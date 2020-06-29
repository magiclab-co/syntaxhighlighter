var match = require('syntaxhighlighter-match');
var Brush = require('./brush');
var sample = require('fs').readFileSync(`${__dirname}/sample.txt`, 'utf8');

describe('brush-vb', function() {
  var instance = null;

  before(function() {
    instance = new Brush();
  });

  it('has populated code sample', function() {
    expect(sample).not.toMatch(/^Populate/);
  });

  describe('instance', function() {
    it('has `regexList`', function() {
      expect(instance).toHaveProperty('regexList');
    });
  });

  describe('parsing', function() {
    var matches = null;

    before(function() {
      matches = match.applyRegexList(sample, instance.regexList);
    });

    it('can parse', function() {
      expect(matches.length).toBeGreaterThan(0);
    });
  });
});