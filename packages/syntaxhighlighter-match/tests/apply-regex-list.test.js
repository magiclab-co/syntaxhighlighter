import { applyRegexList } from '..';

const REGEX_LIST = [
  { regex: /hello|world/g, css: 'greeting' },
  { regex: /\w+/g, css: 'word' },
];

describe('apply-regex-list', function () {
  let matches = null;

  describe('applyRegexList', function () {
    before(function () {
      matches = applyRegexList('hello all world', REGEX_LIST);
    });

    describe('matches', function () {
      it('is an array', () => expect(matches).toBeInstanceOf(Array));
      it('has items', () => expect(matches.length).toBeGreaterThan(0));
    });

    describe('first match', function () {
      it('is `hello`', () => expect(matches[0].value).toBe('hello'));
      it('is a greeting', () => expect(matches[0].css).toBe('greeting'));
    });

    describe('second match', function () {
      it('is `all`', () => expect(matches[1].value).toBe('all'));
      it('is a word', () => expect(matches[1].css).toBe('word'));
    });

    describe('third match', function () {
      it('is `world`', () => expect(matches[2].value).toBe('world'));
      it('is a greeting', () => expect(matches[2].css).toBe('greeting'));
    });
  });
});
