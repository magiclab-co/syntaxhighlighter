var match = require('syntaxhighlighter-match');
var Brush = require('./brush');
var sample = require('fs').readFileSync('./sample.txt', 'utf8');

describe('brush-cpp', () => {
  var instance = null;

  beforeAll(() => {
    instance = new Brush();
  });

  it('has populated code sample', () => {
    expect(sample).not.toMatch(/^Populate/);
  });

  describe('instance', () => {
    it('has `regexList`', () => {
      expect(instance).toHaveProperty('regexList');
    });
  });

  describe('parsing', () => {
    var matches = null;

    beforeAll(() => {
      matches = match.applyRegexList(sample, instance.regexList);
    });

    it('can parse', () => {
      expect(matches.length).toBeGreaterThan(0);
    });
  });
});