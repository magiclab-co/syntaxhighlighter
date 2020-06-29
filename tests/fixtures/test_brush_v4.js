import BrushBase from '../../packages/brush-base';
import { commonRegExp as regexLib } from '../../packages/syntaxhighlighter-regex';

function Brush() {
  this.regexList = [
    { regex: /'.*$/gm, css: 'comments' },
    { regex: /^\s*#.*$/gm, css: 'preprocessor' },
    { regex: regexLib.doubleQuotedString, css: 'string' },
    { regex: new RegExp(this.getKeywords('hello world'), 'gm'), css: 'keyword' },
  ];
}

Brush.prototype = new BrushBase();
Brush.aliases = ['test_brush_v4'];

export default Brush;
