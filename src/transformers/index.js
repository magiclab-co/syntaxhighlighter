import trim from './trim';
import bloggerMode from './blogger_mode';
import stripBrs from './strip_brs';
import unindenter from 'unindenter';
import retabber from 'retabber';

export default function (code, opts) {
  code = trim(code, opts);
  code = bloggerMode(code, opts);
  code = stripBrs(code, opts);
  code = unindenter.unindent(code, opts);

  var tabSize = opts['tab-size'];
  code =
    opts['smart-tabs'] === true ? retabber.smart(code, tabSize) : retabber.regular(code, tabSize);

  return code;
}
