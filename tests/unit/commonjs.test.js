import Brush from '../fixtures/test_brush_v4';

describe('unit/commonjs', () => {
  let html;

  describe('using a brush', () => {
    let brush;

    beforeAll(() => {
      brush = new Brush();
      html = brush.getHtml('hello foo bar world!', { gutter: false });
    });

    it('returns html', () => expect(html).toBeTruthy());
    it('renders content', () => expect(html).toMatchSnapshot());
    it('does not render gutter', () => expect(html).toMatchSnapshot());
  });
});
