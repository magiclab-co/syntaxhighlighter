import BrushBase from '../brush-base';
import { commonRegExp as regexLib } from '../syntaxhighlighter-regex';

function Brush() {
  var constants = '~ true false on off';

  this.regexList = [
    { regex: regexLib.singleLinePerlComments, css: 'comments' }, // comment
    { regex: regexLib.doubleQuotedString, css: 'string' }, // double quoted string
    { regex: regexLib.singleQuotedString, css: 'string' }, // single quoted string
    { regex: /^\s*([a-z0-9\._-])+\s*:/gim, css: 'variable' }, // key
    { regex: /\s?(\.)([a-z0-9\._-])+\s?:/gim, css: 'comments' }, // section
    { regex: /\s(@|:)([a-z0-9\._-])+\s*$/gim, css: 'variable bold' }, // variable, reference
    { regex: /\s+\d+\s?$/gm, css: 'color2 bold' }, // integers
    { regex: /(\{|\}|\[|\]|,|~|:)/gm, css: 'constants' }, // inline hash and array, comma, null
    { regex: /^\s+(-)+/gm, css: 'string bold' }, // array list entry
    { regex: /^---/gm, css: 'string bold' }, // category
    { regex: new RegExp(this.getKeywords(constants), 'gmi'), css: 'constants' }, // constants
  ];
}

Brush.prototype = new BrushBase();
Brush.aliases = ['yaml', 'yml'];

export default Brush;
