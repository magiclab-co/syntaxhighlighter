import BrushBase from '../brush-base';
import { commonRegExp as regexLib } from '../syntaxhighlighter-regex';

function Brush() {
  this.regexList = [
    { regex: regexLib.singleLineCComments, css: 'comments' },
    { regex: /\.\.\s[A-Za-z-]+::/gm, css: 'keyword' },
    { regex: /:[\w\s\-]*:/gm, css: 'color2' },
    { regex: /`.*`/gm, css: 'variable' },
    { regex: /".*"/gm, css: 'variable' },
    { regex: /\s+[A-Z_]*/gm, css: 'color6' },
    { regex: /~~.*~~/gm, css: 'color1 bold' },
    { regex: /\s\|\s/gm, css: 'keyword bold' },
    { regex: /\*\*.*\*\*/gm, css: 'color8 bold' },
  ];

  this.forHtmlScript({
    left: /(&lt;|<)%[@!=]?/g,
    right: /%(&gt;|>)/g,
  });
}

Brush.prototype = new BrushBase();
Brush.aliases = ['rst'];

export default Brush;
