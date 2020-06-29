import {applyRegexList} from 'syntaxhighlighter-match';
import Brush from './brush';

const sample = require('fs').readFileSync(`${__dirname}/sample.txt`, 'utf8');

describe('brush-php', () => {
  let instance = null;

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
      matches = applyRegexList(sample, instance.regexList);
    });

    it('can parse', () => {
      expect(matches.length).toBeGreaterThan(0);
    });
  });
});