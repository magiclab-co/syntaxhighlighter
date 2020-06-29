import { commonRegExp, XRegExp } from '.';

describe('syntaxhighlighter-regex', function() {
  describe('commonRegExp', () => {
    it('is ok', () => expect(commonRegExp).toBeTruthy());
    it('has multiLineCComments', () => expect(commonRegExp).toHaveProperty('multiLineCComments'));
  });

  describe('XRegExp', () => {
    it('is ok', () => expect(XRegExp).toBeTruthy());
  });
});
