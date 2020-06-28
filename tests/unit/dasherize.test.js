import {string, object} from '../../src/dasherize';

describe('unit/dasherize', () => {
  describe('string', () => {
    it('works', () => expect(string('helloFooBar')).toBe('hello-foo-bar'));
    it('does not mess up the first character', () => expect(string('HelloFooBar')).toBe('hello-foo-bar'));
  });

  describe('object', () => {
    it('works', () => expect(object({'helloFooBar': 1})).toEqual({'hello-foo-bar': 1}));
  });
});
