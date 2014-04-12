var metalsmith  = require('metalsmith');
var watch       = require('metalsmith-watch');
var collections = require('metalsmith-collections');
var excerpts    = require('metalsmith-excerpts');

metalsmith(__dirname)
  .use(collections({
    articles: '*.md'
  }))
  .use(excerpts())
  .use(watch('*.md'))
  .build();