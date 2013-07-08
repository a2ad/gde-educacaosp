module.exports = function( grunt ) {
 
   grunt.initConfig({
   // Tasks que o Grunt deve executar

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
         options : {
            mangle : false
         },

         dev : {
            files : {
               'files/demo/js/scripts.min.js' : [ 'files/demo/js/scripts.js' ]
            }
         }
      },

      // Watch
      watch : {
         dev : {
            files : [
               'files/**/*',
               'files/**/*'
            ],

            tasks : [ 'cssmin', 'sass', 'uglify' ]
         }
      }

   });

   // Plugins do Grunt
   grunt.loadNpmTasks( 'grunt-contrib-cssmin' );
   grunt.loadNpmTasks( 'grunt-contrib-sass' );
   grunt.loadNpmTasks( 'grunt-contrib-uglify' );
   grunt.loadNpmTasks( 'grunt-contrib-watch' );
 
 
   // Tarefas que serão executadas
   grunt.registerTask( 'default', [ 'cssmin', 'sass', 'uglify' ] );

   grunt.registerTask( 'w', [ 'watch' ] );
};