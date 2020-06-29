import BrushBase from 'brush-base';
import { commonRegExp as regexLib } from '../../packages/syntaxhighlighter-regex';

function Brush() {
  this.regexList = [
    { regex: /'.*$/gm, css: 'comments' },
    { regex: /^\s*#.*$/gm, css: 'preprocessor' },
    { regex: regexLib.doubleQuotedString, css: 'string' },
    { regex: new RegExp(this.getKeywords('hello world'), 'gm'), css: 'keyword' },
  ];

  this.forHtmlScript(regexLib.phpScriptTags);
}

Brush.prototype = new BrushBase();
Brush.aliases = ['html_test_brush_v4'];
export default Brush;
