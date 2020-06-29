import BrushBase from '../brush-base';
import { commonRegExp as regexLib } from '../syntaxhighlighter-regex';

function Brush() {
  this.regexList = [];
}

Brush.prototype = new BrushBase();
Brush.aliases = ['text', 'plain'];
export default Brush;
