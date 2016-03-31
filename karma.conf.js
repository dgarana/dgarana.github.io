// Karma configuration
// Generated on Mon Oct 26 2015 11:20:54 GMT+0100 (CET)

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',

    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine'],

    // list of files / patterns to load in the browser
    files: [
      'src/assets/js/angular.min.js'
      ,'src/assets/js/angular-*.js'
      ,'src/assets/js/underscore.min.js'
      ,'src/assets/js/restangular.min.js'
      ,'src/assets/js/dirPagination.js'
      ,'src/assets/js/select.min.js'
      ,'src/assets/js/ui-bootstrap-0.14.3.js',
      ,'src/assets/js/ui-bootstrap-tpls-0.14.3.js',
      ,'tests/lib/*.js'
      ,'src/app/**/*.js'
      ,{
        pattern: 'tests/specs/*.json'
        ,watched: true
        ,served: true
        ,included: false
      }
    ],

    // list of files to exclude
    exclude: [
    ],

    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
    },

    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress'],

    // web server port
    port: 9876,

    // enable / disable colors in the output (reporters and logs)
    colors: true,

    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,

    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: false,

    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['PhantomJS'],

    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: true,

    // Concurrency level
    // how many browser should be started simultanous
    concurrency: Infinity
  });
};
