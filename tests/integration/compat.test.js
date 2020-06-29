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

    require('../build-dest-compat/syntaxhighlighter.js');

    // div.appendChild(createScript('/base/tests/build-dest-compat/syntaxhighlighter.js'));
    div.appendChild(createScript('/base/tests/build-dest/test_brush_v3.js'));

    document.body.appendChild(div);

    return new Promise((resolve) => {
      setTimeout(resolve, 900);
    });
  });

  afterAll(() => {
    document.body.removeChild(div);
  });
}

describe('integration/compat', () => {
  describe('`--compat` features', () => {
    setupSyntaxHighlighter();

    describe('using <script/> brush', () => {
      it('highlights v3 brush', () =>
        expect(sizzle('.syntaxhighlighter.test_brush_v3')[0]).toBeTruthy());
    });

    it('exposes window.SyntaxHighlighter', () => expect(window.SyntaxHighlighter).toBeTruthy());
  });

  describe('when XRegExp is already present', () => {
    beforeAll(() => {
      window.XRegExp = '...';
    });

    setupSyntaxHighlighter();

    it('does not overwrite existing instance of XRegExp', () => expect(window.XRegExp).toBe('...'));
  });
});
