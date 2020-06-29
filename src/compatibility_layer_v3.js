// Compatability layer to support V3 brushes. This file is only included when `--compat`
// flag is passed to the `gulp build` command.

import core from './core';
import { XRegExp } from 'syntaxhighlighter-regex';

window.SyntaxHighlighter = core;

if (typeof window.XRegExp === 'undefined') {
  window.XRegExp = XRegExp;
}
