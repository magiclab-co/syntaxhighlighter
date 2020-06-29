import $ from 'cheerio';
import fs from 'fs';
import { applyRegexList } from '../syntaxhighlighter-match';
import Renderer from '.';

const REGEX_LIST = [
  { regex: /hello|world/g, css: 'greeting' },
  { regex: /\w+/g, css: 'word' },
];

const CODE = fs.readFileSync(`${__dirname}/fixture.js`, 'utf8');

function getHtml(code, opts = {}) {
  const matches = applyRegexList(code, opts.regexList || REGEX_LIST);
  const renderer = new Renderer(code, matches, opts);
  return renderer.getHtml();
}

describe('syntaxhighlighter-html-renderer', () => {
  let element = null;

  function itHasElements({ gutter, lineCount, firstLine = 1, highlight = [] } = {}) {
    describe('gutter', () => {
      if (gutter) {
        it('is present', () => expect($('td.gutter', element)).toHaveLength(1));
        it(`has ${lineCount} lines`, () =>
          expect($('td.gutter > .line', element)).toHaveLength(lineCount));
        it(`starts at line ${firstLine}`, () =>
          expect($($('td.gutter > .line', element)[0]).hasClass('number' + firstLine)).toBe(true));

        highlight.forEach((lineNumber) =>
          it(`has line ${lineNumber} highlighted`, () => {
            expect(
              $(`td.gutter > .line.number${lineNumber}`, element).hasClass('highlighted')
            ).toBe(true);
          })
        );
      } else {
        it('is not present', () => expect($('td.gutter', element)).toHaveLength(0));
      }
    });

    describe('code', () => {
      it('is present', () => expect($('td.code', element)).toHaveLength(1));
      it(`has ${lineCount} lines`, () =>
        expect($('td.code > .container > .line', element)).toHaveLength(lineCount));
      it(`starts at line ${firstLine}`, () =>
        expect(
          $($('td.code > .container > .line', element)[0]).hasClass('number' + firstLine)
        ).toBe(true));
    });
  }

  describe('rendering with default options', () => {
    beforeAll(() => (element = $(getHtml(CODE, {}))));
    itHasElements({ gutter: true, lineCount: 14 });
  });

  describe('rendering with options', () => {
    describe('without gutter', () => {
      beforeAll(() => (element = $(getHtml(CODE, { gutter: false }))));
      itHasElements({ gutter: false, lineCount: 14 });
    });

    describe('custom first line', () => {
      beforeAll(() => (element = $(getHtml(CODE, { firstLine: 10 }))));
      itHasElements({ gutter: true, lineCount: 14, firstLine: 10 });
    });

    describe('line highlighting', () => {
      describe('one line', () => {
        beforeAll(() => (element = $(getHtml(CODE, { highlight: 1 }))));
        itHasElements({ gutter: true, lineCount: 14, highlight: [1] });
      });

      describe('multiple lines', () => {
        beforeAll(() => (element = $(getHtml(CODE, { highlight: ['3', '4'] }))));
        itHasElements({ gutter: true, lineCount: 14, highlight: [3, 4] });
      });
    });

    describe('processing URLs', () => {
      beforeAll(() => (element = $(getHtml(CODE, { autoLinks: true, regexList: [] }))));
      itHasElements({ gutter: true, lineCount: 14 });
      it('has URL on line 3', () => {
        expect($('td.code > .container > .line.number3 > .plain > a', element)).toHaveLength(1);
      });
    });
  });
});
