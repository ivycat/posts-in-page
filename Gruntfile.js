module.exports = function(grunt) {
	grunt.loadNpmTasks('grunt-wp-i18n');
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		makepot: {
			target: {
				options: {
					domainPath: '/languages',
					potFilename: 'posts-in-page.pot',
					type: 'wp-plugin'
					}
				}
			}
	});

	grunt.registerTask('default', ['makepot']);
};
