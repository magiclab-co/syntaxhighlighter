import parser from './opts-parser';

describe('opts-parser', function() {
  let opts = null;

  describe('.defaults', function() {
    before(function() {
      opts = {'foo': 'bar'};
      parser.defaults(opts, {'foo': 'default', 'fiz-biz': 1});
    });

    it('has foo', () => expect(opts).toHaveProperty('foo'));
    it('is bar', () => expect(opts.foo).toBe('bar'));
    it('has fiz-biz', () => expect(opts).toEqual(expect.arrayContaining(['fizBiz', 'fiz-biz'])));
    it('is 1', () => expect(opts.fizBiz).toBe(1));
  });

  describe('.parse', function() {
    describe('booleans', function() {
      before(() => opts = parser.parse('foo: true; bar: false;'));
      it('has true foo', () => expect(opts.foo).toBe(true));
      it('has false bar', () => expect(opts.bar).toBe(false));
    });

    describe('words', function() {
      before(() => opts = parser.parse('foo: bar'));
      it('has foo', () => expect(opts).toHaveProperty('foo'));
      it('is bar', () => expect(opts.foo).toBe('bar'));
    });

    describe('arrays', function() {
      before(() => opts = parser.parse('foo: [hello, world]'));
      it('has foo', () => expect(opts).toHaveProperty('foo'));
      it('is array', () => expect(opts.foo).toEqual(['hello', 'world']));
    });

    describe('strings', function() {
      describe('single quoted', function() {
        before(() => opts = parser.parse('foo: \'hello, world\' '));
        it('has foo', () => expect(opts).toHaveProperty('foo'));
        it('is hello, world', () => expect(opts.foo).toBe('hello, world'));
      });

      describe('double quoted', function() {
        before(() => opts = parser.parse('foo: "hello, world" '));
        it('has foo', () => expect(opts).toHaveProperty('foo'));
        it('is hello, world', () => expect(opts.foo).toBe('hello, world'));
      });
    });

    describe('all', function() {
      before(() => opts = parser.parse('foo-baz: \'hello, world\'; helloWorld: [1,2,3]; color: #000'));
      it('has keys', () => expect(opts).toEqual(expect.arrayContaining(['fooBaz', 'foo-baz', 'helloWorld', 'color'])));
      it('has color', () => expect(opts.color).toBe('#000'));
    });
  });
});
