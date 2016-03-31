module.exports = function(grunt) {
  grunt.initConfig({
    csslint: {
      options: {
        csslintrc: '.csslintrc',
      },
    },
    jscs: {
      src: '**/*.js',
      options: {
        excludeFiles: ['src/assets/**/*.js'],
        fix: true,
        preset: 'google',
        disallowMultipleVarDecl: false,
        requireCamelCaseOrUpperCaseIdentifiers: 'ignoreProperties',
      },
    },
    jshint: {
      options: {
        smarttabs: true
      },
      all: [
          'Gruntfile.js',
          'src/**/*.js',
          '!src/assets/**/*.js',
          'tests/*.js'
      ],
    },
    watch: {
      files: ['<%= jshint.files %>'],
      tasks: ['jshint', 'csslint'],
    },
  });

  grunt.loadNpmTasks('grunt-contrib-csslint');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-jscs');

  grunt.registerTask(
    'default', ['jshint', 'jscs', 'csslint']);
};
