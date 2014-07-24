'use strict';

// Karma configuration
// http://karma-runner.github.io/0.10/config/configuration-file.html

module.exports = function(config) {
    config.set({
        // base path, that will be used to resolve files and exclude
        basePath: '../',

        frameworks: ['mocha', 'sinon', 'chai'],

        preprocessors: {
            '**/*.coffee': 'coffee'
        },

        files: [
            'test/lib/jquery.js',
            'test/lib/angular.js',
            'test/lib/angular-mocks.js',
            'src/**/*.coffee',
            'test/**/test_*.coffee'
        ],

        exclude: ['*.swp', '*~'],

        reporters: ['progress'],

        // web server port
        port: 8050,

        // level of logging
        // possible values: LOG_DISABLE || LOG_ERROR || LOG_WARN || LOG_INFO || LOG_DEBUG
        logLevel: config.LOG_INFO,

        // enable / disable watching file and executing tests whenever any file changes
        autoWatch: true,

        // Start these browsers, currently available:
        // - Chrome
        // - ChromeCanary
        // - Firefox
        // - Opera
        // - Safari (only Mac)
        // - PhantomJS
        // - IE (only Windows)
        browsers: ['Chrome', 'PhantomJS'],

        // Continuous Integration mode
        // if true, it capture browsers, run tests and exit
        singleRun: false
    });
};