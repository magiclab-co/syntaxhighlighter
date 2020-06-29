import {applyRegexList} from 'syntaxhighlighter-match';
import Brush from './brush';

const sample = require('fs').readFileSync(`${__dirname}/sample.txt`, 'utf8');

describe('brush-php', function() {
  let instance = null;

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
      matches = applyRegexList(sample, instance.regexList);
    });

    it('can parse', function() {
      expect(matches.length).toBeGreaterThan(0);
    });
  });
});