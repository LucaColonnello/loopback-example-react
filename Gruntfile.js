// Generated on 2014-06-23 using generator-angular 0.9.1
'use strict';

var buildClientBundle = require('./client/lbclient/build');
var fs = require('fs');
var path = require('path');


module.exports = function (grunt) {

  // Load grunt tasks automatically
  require('load-grunt-tasks')(grunt);

  // Time how long tasks take. Can help when optimizing build times
  require('time-grunt')(grunt);

  // require webpack
  var
    webpack = require("webpack")
  ,  webpackConfig = require("./webpack.config.js")
  ,  webpackBuildPlugins = new webpack.DefinePlugin({
      "process.env": {
        // This has effect on the react lib size
        "NODE_ENV": JSON.stringify("production")
      }
     })
  ;

  // Define the configuration for all the tasks
  grunt.initConfig({

    // Webpack compilation tasks
    webpack: {
      options: webpackConfig,
      build: {
        plugins: ( webpackConfig.plugins ) ? webpackConfig.plugins.concat( webpackBuildPlugins ) : [ webpackBuildPlugins ]
      },
      "build-dev": {
        devtool: "sourcemap",
        debug: true
      }
    },

    // Watches files for changes and runs tasks based on the changed files
    watch: {
      js: {
        files: ['./client/reactapp/{,*/}*.js'],
        tasks: ['webpack:build-dev'],
        options: {
          livereload: '<%= connect.options.livereload %>'
        }
      },
      gruntfile: {
        files: ['Gruntfile.js']
      },
      livereload: {
        options: {
          livereload: '<%= connect.options.livereload %>'
        },
        files: [
          './client/public/{,*/}*.html',
          './client/public/*.js',
          './client/public/*.css',
          './client/public/images/{,*/}*.{png,jpg,jpeg,gif,webp,svg}'
        ]
      }
    },

    // The actual grunt server settings
    connect: {
      options: {
        port: 3000,
        // Change this to '0.0.0.0' to access the server from outside.
        hostname: 'localhost',
        livereload: 35729,
        keepalive: true
      },
      test: {
        options: {
          port: 9001,
          middleware: function (connect) {
            return [
              connect.static('.tmp'),
              connect.static('test'),
              connect.static("./client/public/")
            ];
          }
        }
      }
    },

    // Server Tests
    mochaTest: {
      common: {
        options: {
          reporter: 'spec',
          quiet: false,
          clearRequireCache: false
        },
        src: ['common/models/test/**/*.js']
      },
      server: {
        options: {
          reporter: 'spec',
          quiet: false,
          clearRequireCache: false
        },
        src: ['server/test/**/*.js']
      },
      client: {
        options: {
          reporter: 'spec',
          require: './mocha-babel.js'
        },
        src: ['client/reactapp/components/tests/*.js']
      }
    }

  });

  grunt.registerTask('build-lbclient', 'Build lbclient browser bundle', function() {
    var done = this.async();
    buildClientBundle(process.env.NODE_ENV || 'development', done);
  });
  
  grunt.registerTask('run', 'Start the app server', function() {
    var done = this.async();

    var connectConfig = grunt.config.get().connect.options;
    process.env.LIVE_RELOAD = connectConfig.livereload;
    process.env.NODE_ENV = this.args[0];

    var keepAlive = this.flags.keepalive || connectConfig.keepalive;

    var server = require('./server');
    server.set('port', connectConfig.port);
    server.set('host', connectConfig.hostname);
    server.start()
      .on('listening', function() {
        if (!keepAlive) done();
      })
      .on('error', function(err) {
        if (err.code === 'EADDRINUSE') {
          grunt.fatal('Port ' + connectConfig.port +
            ' is already in use by another process.');
        } else {
          grunt.fatal(err);
        }
      });
  });

  grunt.registerTask('serve', 'Compile then start the app server', function (target) {
    if (target === 'dist') {
      return grunt.task.run(['build', 'run:dist:keepalive']);
    }

    grunt.task.run([
      'test',
      "build-lbclient",
      'webpack:build-dev',
      'run:development',
      'watch'
    ]);
  });

  // TODO: check if with Jest compilation must be done or Jest compile babel and jsx yet
  /*grunt.registerTask('test:client', [
    'webpack:build-dev',
    'connect:test',
  ]);*/

  grunt.registerTask('test:common', [
    'mochaTest:common'
  ]);

  grunt.registerTask('test:server', [
    'mochaTest:server'
  ]);

  grunt.registerTask('test:client', [
    'mochaTest:client'
  ]);

  grunt.registerTask('test', [
    'test:server',
    'test:common',
    'test:client'
  ]);

  grunt.registerTask('build', [
    'test',
    "build-lbclient",
    'webpack:build'
  ]);

  grunt.registerTask('default', [
    'build'
  ]);
};
