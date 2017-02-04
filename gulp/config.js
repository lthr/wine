const temp = './.tmp';
const dest = './dist';

module.exports = {
  temp,
  dest,

  index: {
    src: './src/index.html',
    dest: dest
  },

  rev: {
    src: [
      `${dest}/**/*.js`, `${dest}/**/*.css`
    ],
    dest: dest,
    manifest: {
      src: `${temp}/rev-manifest.json`,
      dest: temp
    },
    index: {
      src: `${dest}/index.html`,
      dest
    }
  },

  vendorJs: {
    src: [
      './node_modules/angular/angular.min.js', './node_modules/angular-ui-router/release/angular-ui-router.min.js', './node_modules/ngstorage/ngStorage.min.js'
    ],
    dest: `${dest}/js`
  },

  appJs: {
    src: [
      './src/**/*.js', './.tmp/*.js'
    ],
    dest: `${dest}/js`
  },

  vendorCss: {
    src: ['./node_modules/bootstrap/dist/css/bootstrap.min.css'],
    dest: `${dest}/css`
  },

  appCss: {
    src: './src/style/style.css',
    dest: `${dest}/css`
  },

  appTemplates: {
    src: './src/app/**/*.html',
    dest: temp
  }

};