import BrushBase from '../brush-base';
import { commonRegExp as regexLib } from '../syntaxhighlighter-regex';

function Brush() {
  this.regexList = [
    {
      regex: /^\+\+\+ .*$/gm,
      css: 'color2',
    },
    {
      regex: /^\-\-\- .*$/gm,
      css: 'color2',
    },
    {
      regex: /^\s.*$/gm,
      css: 'color1',
    },
    {
      regex: /^@@.*@@.*$/gm,
      css: 'variable',
    },
    {
      regex: /^\+.*$/gm,
      css: 'string',
    },
    {
      regex: /^\-.*$/gm,
      css: 'color3',
    },
  ];
}

Brush.prototype = new BrushBase();
Brush.aliases = ['diff', 'patch'];
export default Brush;
