import fs from 'fs';
import sass from 'node-sass';

describe('theme-django', () => {
  it('compiles ok', (done) => {
    fs.readFile(`${__dirname}/theme.scss`, 'utf8', function (err, content) {
      var results = sass.renderSync({
        data: content,
        includePaths: [`${__dirname}/node_modules/theme-base`],
      });
      if (!results.css.length) throw new Error('Expecting results');
      done();
    });
  });
});
