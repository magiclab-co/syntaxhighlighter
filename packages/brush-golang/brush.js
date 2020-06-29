import BrushBase from '../brush-base';
import { commonRegExp as regexLib } from '../syntaxhighlighter-regex';

function Brush() {
  var funcs =
    'append cap close complex copy delete imag len' + ' make new panic print println real recover';

  var keywords =
    'break case chan const continue default defer else fallthrough for func go' +
    ' goto if import interface map package range return select struct switch type var';

  var constants = 'true false iota nil';

  var datatypes =
    'bool byte complex64 complex128 error float32 float64' +
    ' int int8 int16 int32 int64 rune string' +
    ' uint uint8 uint16 uint32 uint64 uintptr';

  this.regexList = [
    { regex: regexLib.singleLineCComments, css: 'comments' }, // one line comments
    { regex: regexLib.multiLineCComments, css: 'comments' }, // multiline comments
    { regex: regexLib.doubleQuotedString, css: 'string' }, // double quoted strings
    { regex: regexLib.singleQuotedString, css: 'string' }, // single quoted strings
    { regex: /\b([\d]+(\.[\d]+)?|0x[a-f0-9]+)\b/gi, css: 'value' }, // numbers
    { regex: new RegExp(this.getKeywords(funcs), 'gmi'), css: 'functions' }, // common functions
    { regex: new RegExp(this.getKeywords(keywords), 'gm'), css: 'keyword' }, // keyword
    { regex: new RegExp(this.getKeywords(constants), 'gmi'), css: 'constants' }, // constants
    { regex: new RegExp(this.getKeywords(datatypes), 'gm'), css: 'color2' },
  ];

  this.forHtmlScript(regexLib.phpScriptTags);
}

Brush.prototype = new BrushBase();
Brush.aliases = ['golang', 'go'];

export default Brush;
