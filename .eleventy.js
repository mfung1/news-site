const {DateTime} = require('luxon');

module.exports = function(eleventyConfig) {
  eleventyConfig.setTemplateFormats(['njk', 'md', 'png','jpg', ]);
  eleventyConfig.addFilter("postDate", (dateObj) => {
    return DateTime.fromISO(dateObj, {
      zone: "local",
    }).toLocaleString(DateTime.DATE_FULL);
  });
  eleventyConfig.addNunjucksFilter('date', )
  const scripts = ['src/vendor/bootstrap.js', 'src/vendor/jquery.js'],
        fonts = ['src/media/fonts/glyphicons-halflings-regular.eot', 'src/media/fonts/glyphicons-halflings-regular.ttf', 'src/media/fonts/glyphicons-halflings-regular.woff', 'src/media/fonts/glyphicons-halflings-regular.svg'];
  fonts.forEach(font => eleventyConfig.addPassthroughCopy(font, '/media/fonts'));
  scripts.forEach(script => eleventyConfig.addPassthroughCopy(script , '/vendor'));
  return {
    dir: { input: 'src', output: 'dist', data: '_data' },
    passthroughFileCopy: true,
    templateFormats: ['njk', 'md', 'css', 'html', 'yml'],
    htmlTemplateEngine: 'njk'
  }
}