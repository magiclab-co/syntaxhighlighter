import BrushBase from '../brush-base';
import { commonRegExp as regexLib } from '../syntaxhighlighter-regex';

function Brush() {
  var keywords = '^message|^package|^option|^import|^extend|^service|^enum';

  var field_rules = 'optional|required|repeated|default';

  var types =
    'double|float|int32|int64|uint32|uint64|sint32|sint64|long|fixed32|fixed64|sfixed|sfixed64|bool|string|bytes';

  this.regexList = [
    { regex: regexLib.singleLineCComments, css: 'comments' }, // one line comments
    { regex: regexLib.multiLineCComments, css: 'comments' }, // multy line comments
    { regex: new RegExp(this.getKeywords(types), 'gm'), css: 'color1 bold' },
    { regex: new RegExp(this.getKeywords(field_rules), 'gm'), css: 'constants' },
    { regex: new RegExp(this.getKeywords(keywords), 'gm'), css: 'keyword' },
    { regex: /\s+[A-Z_]*/gm, css: 'color6' },
    { regex: /true|false/gm, css: 'color3' },
    { regex: /\s+[0-9]*/gm, css: 'color3' }, //Field numbers
  ];

  this.forHtmlScript({
    left: /(&lt;|<)%[@!=]?/g,
    right: /%(&gt;|>)/g,
  });
}

Brush.prototype = new BrushBase();
Brush.aliases = ['protobuf'];

export default Brush;
