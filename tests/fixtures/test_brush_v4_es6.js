import BrushBase from '../../packages/brush-base';
import { commonRegExp } from '../../packages/syntaxhighlighter-regex';

export default class Brush extends BrushBase {
  static get aliases() {
    return ['test_brush_v4_es6'];
  }

  constructor() {
    super();

    this.regexList = [
      { regex: /'.*$/gm, css: 'comments' },
      { regex: /^\s*#.*$/gm, css: 'preprocessor' },
      { regex: commonRegExp.doubleQuotedString, css: 'string' },
      { regex: new RegExp(this.getKeywords('hello world'), 'gm'), css: 'keyword' },
    ];
  }
}
