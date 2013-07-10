module.exports = function( grunt ) {
 
   grunt.initConfig({
      pkg: grunt.file.readJSON('package.json'),

      // CSS min
      cssmin: {
         combine: {
            files: {
               'files/demo/css/main.min.css': 'files/demo/css/main.css'
            }
         }
      },

      // SASS
      sass : {
         dev : {
            options : { 
               style : 'compressed',
               noCache: true
            },
            files : {
               'files/gde/css/main.css' : 'files/gde/css/sass/main.scss'
            }
         }
      },

      // Uglify
      uglify : {
         dist : {
            src: 'files/demo/js/scripts.js',
            dest: 'files/demo/js/scripts.min.js'
         }
      },

      // Watch
      watch: {
         files: [
            'files/demo/css/main.css',
            'files/gde/css/sass/*.scss',
            'files/demo/js/scripts.js'
            ],
         tasks: ['cssmin', 'sass', 'uglify']
      },

      // Run Jekyll commands
      jekyll: {
         server: {
            server : true,
            // Add the --watch flag, i.e. rebuild on file changes
            watch: true
         }
      }
   });

   // Plugins do Grunts
   grunt.loadNpmTasks( 'grunt-contrib-cssmin' );
   grunt.loadNpmTasks( 'grunt-contrib-sass' );
   grunt.loadNpmTasks( 'grunt-contrib-uglify' );
   grunt.loadNpmTasks( 'grunt-contrib-watch' );
   grunt.loadNpmTasks( 'grunt-jekyll' );
 
 
   // Tarefas que serão executadas
   grunt.registerTask( 'default', [ 'cssmin', 'sass', 'uglify' ] );

   grunt.registerTask( 'w', [ 'watch' ] );

   grunt.registerTask('server', 'jekyll:server');
};