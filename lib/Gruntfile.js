'use strict';
module.exports = function(grunt) {
    grunt.initConfig({

        jshint: {
            files: ['../javascripts/main.js'],
            options: {
                predef: ["document", "console", "Module", "$", ],
                esnext: true,
                globalstrict: true,
                globals: {}, //ex: {"Sandwich": true, "require": true}
                browserify: true
            }
        },
        cssmin: {
            target: {
                files: [{
                    expand: true,
                    cwd: '../css',
                    src: ['../css/styles.css'],
                    ext: '.min.css'
                }]
            }
        },
        // uglify: {
        //     options: {
        //         sourceMap: true
        //     },
        //     build: {
        //         files: {
        //             '../javascripts/main.min.js': '../javascripts/main.js',
        //         }
        //     }
        // },
        sass: {
            dist: {
                files: {
                    '../css/styles.css': '../sass/styles.scss'
                }
            }
        },
        watch: {
            javascripts: {
                files: ['../javascripts/main.js'],
                tasks: ['jshint']
            },
            sass: {
                files: ['../sass/styles.scss'],
                tasks: ['sass', 'cssmin']
            }
        }
    });

    require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);
    grunt.registerTask('default', ['jshint', 'sass', 'cssmin', 'watch']);
};
