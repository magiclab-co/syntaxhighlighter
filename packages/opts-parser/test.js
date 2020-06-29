import parser from './opts-parser';

describe('opts-parser', () => {
  let opts = null;

  describe('.defaults', () => {
    beforeAll(() => {
      opts = { foo: 'bar' };
      parser.defaults(opts, { foo: 'default', 'fiz-biz': 1 });
    });

    it('has foo', () => expect(opts).toHaveProperty('foo'));
    it('is bar', () => expect(opts.foo).toBe('bar'));
    it('has fiz-biz', () =>
      expect(Object.keys(opts)).toEqual(expect.arrayContaining(['fizBiz', 'fiz-biz'])));
    it('is 1', () => expect(opts.fizBiz).toBe(1));
  });

  describe('.parse', () => {
    describe('booleans', () => {
      beforeAll(() => (opts = parser.parse('foo: true; bar: false;')));
      it('has true foo', () => expect(opts.foo).toBe(true));
      it('has false bar', () => expect(opts.bar).toBe(false));
    });

    describe('words', () => {
      beforeAll(() => (opts = parser.parse('foo: bar')));
      it('has foo', () => expect(opts).toHaveProperty('foo'));
      it('is bar', () => expect(opts.foo).toBe('bar'));
    });

    describe('arrays', () => {
      beforeAll(() => (opts = parser.parse('foo: [hello, world]')));
      it('has foo', () => expect(opts).toHaveProperty('foo'));
      it('is array', () => expect(opts.foo).toEqual(['hello', 'world']));
    });

    describe('strings', () => {
      describe('single quoted', () => {
        beforeAll(() => (opts = parser.parse("foo: 'hello, world' ")));
        it('has foo', () => expect(opts).toHaveProperty('foo'));
        it('is hello, world', () => expect(opts.foo).toBe('hello, world'));
      });

      describe('double quoted', () => {
        beforeAll(() => (opts = parser.parse('foo: "hello, world" ')));
        it('has foo', () => expect(opts).toHaveProperty('foo'));
        it('is hello, world', () => expect(opts.foo).toBe('hello, world'));
      });
    });

    describe('all', () => {
      beforeAll(
        () => (opts = parser.parse("foo-baz: 'hello, world'; helloWorld: [1,2,3]; color: #000"))
      );
      it('has keys', () =>
        expect(Object.keys(opts)).toEqual(
          expect.arrayContaining(['fooBaz', 'foo-baz', 'helloWorld', 'color'])
        ));
      it('has color', () => expect(opts.color).toBe('#000'));
    });
  });
});
