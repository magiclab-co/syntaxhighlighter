import unindenter from './unindenter';

describe('unindenter', () => {
  describe('.unindent', () => {
    it('removes common number of tabs from each line', () => {
      var actual = unindenter.unindent('\t\t1\n\t\t2');
      expect(actual).toBe('1\n2');
    });

    it('ignores empty lines', () => {
      var actual = unindenter.unindent('\t\t1\n\n  \n\t\t2\n\t\t\t3');
      expect(actual).toBe('1\n\n  \n2\n\t3');
    });
  });
});
