module.exports = function( grunt ) {
 
   grunt.initConfig({
      pkg: grunt.file.readJSON('package.json'),

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
         },
         devIE : {
            options : { 
               style : 'expanded',
               noCache: true
            },
            files : {
               'files/gde/css/main-ie8.css' : 'files/gde/css/sass/main.scss'
            }
         },
         demo : {
            options : { 
               style : 'compressed',
               noCache: true
            },
            files : {
               'files/demo/css/main-demo.css' : 'files/demo/css/sass/main-demo.scss'
            }
         },
      },

      'comment-media-queries': {
         options: {
            // Task-specific options go here.
         },
         your_target: {
            src: 'files/gde/css/main-ie8.css',
            dest: 'files/gde/css/main-ie8.css'
         },
      },

      // Uglify
      uglify : {
         demoHomepage: {
            src: 'files/demo/js/assets/homepage.js',
            dest: 'files/demo/js/homepage.min.js'
         },
         demoInterna: {
            src: [
               'files/demo/js/assets/interna.js',
               'files/demo/js/google-code-prettify/prettify.js'
            ],
            dest: 'files/demo/js/interna.min.js'
         },
         distGde : {
            src: 'files/gde/js/scripts.js',
            dest: 'files/gde/js/scripts.min.js'
         }
      },

      // Watch
      watch: {
         'uglify:demoHomepage': {
            files: [ 'files/demo/js/assets/homepage.js' ],
            tasks: ['uglify:demoHomepage']
         },
         'uglify:demoInterna': {
            files: [
               'files/demo/js/assets/interna.js',
               'files/demo/js/google-code-prettify/prettify.js'
            ],
            tasks: ['uglify:demoInterna']
         },
         sass: {
            files: ['files/gde/css/sass/*.scss'],
            tasks: ['sass:dev', 'sass:devIE', 'comment-media-queries']
         },
         'sass:demo': {
            files: ['files/demo/css/sass/*.scss'],
            tasks: ['sass:demo']
         }
      }

   });

   // Plugins do Grunts
   grunt.loadNpmTasks('grunt-contrib-concat')
   grunt.loadNpmTasks( 'grunt-contrib-cssmin' );
   grunt.loadNpmTasks( 'grunt-comment-media-queries' );
   grunt.loadNpmTasks( 'grunt-contrib-sass' );
   grunt.loadNpmTasks( 'grunt-contrib-uglify' );
   grunt.loadNpmTasks( 'grunt-contrib-watch' );
 
 
   // Tarefas que serão executadas
   grunt.registerTask( 'default', [ 'concat', 'cssmin', 'sass', 'grunt-comment-media-queries', 'uglify' ] );

   grunt.registerTask( 'w', [ 'watch' ] );

};