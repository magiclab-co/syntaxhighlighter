var fs = require('fs');
var sass = require('node-sass');

describe('theme-base', () => {
  it('compiles ok', done => {
    fs.readFile(`${__dirname}/theme-base.scss`, 'utf8', function(err, content) {
      var results = sass.renderSync({
        data: content
      });
      if(!results.css.length) throw new Error("Expecting results");
      done();
    });
  });
});