/* eslint-disable no-unused-vars */
// This header is prepended to v3 brushes so that they can be bundled in like regular v4 brushes.

var SyntaxHighlighter = {
  Highlighter: require('../../packages/brush-base'),
  regexLib: require('../../packages/syntaxhighlighter-regex').commonRegExp,
  brushes: {},
};

class Proxy {
  set Brush(value) {
    module.exports = value;
  }
}

var exports = new Proxy();
