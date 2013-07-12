module.exports = function( grunt ) {
 
   grunt.initConfig({
      pkg: grunt.file.readJSON('package.json'),

      concat: {
         css: {
            src: [
               'files/demo/css/assets/src/style.css',
               'files/demo/css/assets/src/font-awesome.css'
            ],
            dest: 'files/demo/css/assets/main.css'
         },
      },

      // CSS min
      cssmin: {
         combine: {
            files: {
               'files/demo/css/main.min.css': 'files/demo/css/assets/main.css'
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
         },
         distGde : {
            src: 'files/gde/js/scripts.js',
            dest: 'files/gde/js/scripts.min.js'
         }
      },

      // Watch
      watch: {
         css: {
            files: [
               'files/demo/css/assets/src/style.css',
               'files/demo/css/assets/src/font-awesome.css'
            ],
            tasks: ['concat', 'cssmin']
         },
         js: {
            files: [
               'files/demo/js/scripts.js',
               'files/gde/js/scripts.js'
            ],
            tasks: ['uglify']
         },
         sass: {
            files: ['files/gde/css/sass/*.scss'],
            tasks: ['sass']
         }
      }

   });

   // Plugins do Grunts
   grunt.loadNpmTasks('grunt-contrib-concat')
   grunt.loadNpmTasks( 'grunt-contrib-cssmin' );
   grunt.loadNpmTasks( 'grunt-contrib-sass' );
   grunt.loadNpmTasks( 'grunt-contrib-uglify' );
   grunt.loadNpmTasks( 'grunt-contrib-watch' );
 
 
   // Tarefas que serão executadas
   grunt.registerTask( 'default', [ 'concat', 'cssmin', 'sass', 'uglify' ] );

   grunt.registerTask( 'w', [ 'watch' ] );

};