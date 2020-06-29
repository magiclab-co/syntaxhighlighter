var match = require('syntaxhighlighter-match');
var Brush = require('./brush');
var sample = require('fs').readFileSync('./sample.txt', 'utf8');

describe('brush-coldfusion', () => {
  var instance = null;

  beforeAll(() => {
    return instance = new Brush();
  });

  it('has populated code sample', () => {
    return expect(sample).not.toMatch(/^Populate/);
  });

  describe('instance', () => {
    return it('has `regexList`', () => {
      return expect(instance).toHaveProperty('regexList');
    });
  });

  return describe('parsing', () => {
    var matches = null;

    beforeAll(() => {
      return matches = match.applyRegexList(sample, instance.regexList);
    });

    return it('can parse', () => {
      return expect(matches.length).toBeGreaterThan(0);
    });
  });
});