var BrushBase = require('./brush-base');

class TestBrush extends BrushBase {
  constructor() {
    super();

    this.regexList = [
      { regex: new RegExp(this.getKeywords('foo bar', {css: 'test'})) }
    ];
  }
}

describe('brush-base', function() {
  describe('new brush', function() {
    var brush;

    beforeEach(function() {
      brush = new TestBrush();
    });

    it('has `regexList`', function() {
      expect(brush).toHaveProperty('regexList');
    });

    it('sets keywords', function() {
      expect(brush.regexList[0].regex.toString()).toBe('/\\b(?:foo|bar)\\b/');
    });

    it('.getHtml()', function() {
      const html = brush.getHtml('bar foo', { className: 'test_brush' });
      expect(html).toBeTruthy();
      expect(html).toMatch(/class=".*test_brush.*"/);
    });
  });
});