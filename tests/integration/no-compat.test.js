import sizzle from 'sizzle';

import fs from 'fs';
import path from 'path';

const HTML = fs.readFileSync(path.resolve(__dirname, '../build-source/index.html'), 'utf8');

function createScript(src) {
  const script = document.createElement('script');
  script.src = src;
  return script;
}

function setupSyntaxHighlighter() {
  let div;

  beforeAll(() => {
    div = document.createElement('div');
    div.innerHTML = HTML;

    div.appendChild(createScript('/base/tests/build-dest/syntaxhighlighter.js'));

    document.body.appendChild(div);

    return new Promise((resolve) => {
      setTimeout(resolve, 900);
    });
  });

  afterAll(() => {
    document.body.removeChild(div);
  });
}

function testSuite() {
  describe('using only the bundle', () => {
    it('highlights v3 brush', () =>
      expect(sizzle('.syntaxhighlighter.html_test_brush_v3')[0]).toBeTruthy());
    it('highlights v4 brush', () =>
      expect(sizzle('.syntaxhighlighter.test_brush_v4')[0]).toBeTruthy());
    it('highlights v4 ES6 brush', () =>
      expect(sizzle('.syntaxhighlighter.test_brush_v4_es6')[0]).toBeTruthy());
  });

  it('does not expose window.SyntaxHighlighter', () =>
    expect(window.SyntaxHighlighter).toBeUndefined());
}

describe('integration/no-compat', () => {
  describe('default settings', () => {
    setupSyntaxHighlighter();
    testSuite();
  });

  describe('user settings', () => {
    function test(config) {
      beforeAll(() => (window.syntaxhighlighterConfig = config));
      afterAll(() => delete window.syntaxhighlighterConfig);

      setupSyntaxHighlighter();
      testSuite();

      it('applies custom class name from global config variable to all units', () =>
        expect(sizzle('.foo-bar.syntaxhighlighter').length).toBe(3));
    }

    describe('dash-case arguments', () => test({ 'class-name': 'foo-bar' }));
    describe('camel-case arguments', () => test({ className: 'foo-bar' }));
  });
});
