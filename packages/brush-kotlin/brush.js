import BrushBase from '../brush-base';
import { commonRegExp as regexLib } from '../syntaxhighlighter-regex';

function Brush() {
  var keywords =
    'abstract annotation as break by catch class companion const constructor continue crossinline data ' +
    'do dynamic else enum external false final finally for fun get if import in infix inline inner interface internal ' +
    'is lateinit noinline null object open operator out override package private protected public reified return sealed ' +
    'set super tailrec this throw true try val var vararg when where while';

  this.regexList = [
    { regex: regexLib.singleLineCComments, css: 'comments' }, // one line comments
    { regex: /\/\*([^\*][\s\S]*?)?\*\//gm, css: 'comments' }, // multiline comments
    { regex: /\/\*(?!\*\/)\*[\s\S]*?\*\//gm, css: 'preprocessor' }, // documentation comments
    { regex: regexLib.doubleQuotedString, css: 'string' }, // strings
    { regex: regexLib.singleQuotedString, css: 'string' }, // strings
    { regex: /\b([\d]+(\.[\d]+)?|0x[a-f0-9]+)\b/gi, css: 'value' }, // numbers
    { regex: /(?!\@interface\b)\@[\$\w]+\b/g, css: 'color1' }, // annotation @anno
    { regex: /\@interface\b/g, css: 'color2' }, // @interface keyword
    { regex: new RegExp(this.getKeywords(keywords), 'gm'), css: 'keyword' }, // kotlin keyword
  ];

  this.forHtmlScript({
    left: /(&lt;|<)%[@!=]?/g,
    right: /%(&gt;|>)/g,
  });
}

Brush.prototype = new BrushBase();
Brush.aliases = ['kotlin'];

export default Brush;
