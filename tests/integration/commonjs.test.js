import sizzle from 'sizzle';
import SyntaxHighlighter, { registerBrush, clearRegisteredBrushes } from '../..';
import Brush from '../fixtures/test_brush_v4';

function setupSyntaxHighlighter(html) {
  let div;

  beforeAll(() => {
    div = document.createElement('div');
    div.innerHTML = html;
    document.body.appendChild(div);

    SyntaxHighlighter.highlight({ gutter: false });

    return new Promise((resolve) => {
      setTimeout(resolve, 900);
    });
  });

  afterAll(() => {
    document.body.removeChild(div);
  });
}

describe('integration/commonjs', () => {
  beforeAll(() => {
    registerBrush(Brush);
  });

  afterAll(() => {
    clearRegisteredBrushes();
  });

  describe('first render pass', () => {
    setupSyntaxHighlighter(`<pre class="brush: test_brush_v4;">first</pre>`);

    it('has applied the brush', () => {
      expect(sizzle('.syntaxhighlighter')[0].innerHTML).toMatchSnapshot();
    });

    it('does not render gutter', () =>
      expect(sizzle('.syntaxhighlighter td.gutter').length).toBe(0));
  });

  describe('second render pass', () => {
    setupSyntaxHighlighter(`<pre class="brush: test_brush_v4;">second</pre>`);

    it('has applied the brush', () => {
      expect(sizzle('.syntaxhighlighter')[0].innerHTML).toMatchSnapshot();
    });
  });
});
