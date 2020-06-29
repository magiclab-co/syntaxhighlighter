import match from '../syntaxhighlighter-match';
import Brush from './brush';
import fs from 'fs';
var sample = fs.readFileSync(`${__dirname}/sample.txt`, 'utf8');

describe('brush-coldfusion', () => {
  var instance = null;

  beforeAll(() => {
    return (instance = new Brush());
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
      return (matches = match.applyRegexList(sample, instance.regexList));
    });

    it('can parse', () => {
      expect(matches.length).toBeGreaterThan(0);
    });
  });
});
