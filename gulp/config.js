const temp = './tmp';
const dest = './dist';

module.exports = {
  temp,
  dest,
  dist: {
    src: {
      appJs: [
        './src/**/*.js',
        './tmp/templates.js'
      ],
      vendorJs: [
        './node_modules/angular/angular.min.js',
        './node_modules/angular-ui-router/release/angular-ui-router.min.js',
        './node_modules/ngstorage/ngStorage.min.js'
      ],
      appCss: './src/style/style.css',
      vendorCss: [
        './node_modules/bootstrap/dist/css/bootstrap.min.css'
      ],
      index: './src/index.html',
      templates: './src/app/**/*.html'
    },
    temp,
    dest
  }
};