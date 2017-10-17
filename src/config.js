System.config({

    packages: {
        'app': {
            main: './main.js',
            defaultExtension: 'js'
        }
    },

    map: {
        app: './',
        'angular': 'node_modules/angular/angular.js',
        'ngSanitize': 'node_modules/angular-sanitize/angular-sanitize.js',
        'text': 'node_modules/systemjs-plugin-text/text.js'
    },
    meta: {
        'angular': {
            format: 'global',
            exports: 'angular'
        }
    }

});