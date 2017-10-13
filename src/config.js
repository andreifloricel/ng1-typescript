System.config({

    packages: {
        'app': {
            main: './app.js',
            defaultExtension: 'js'
        }
    },

    map: {
        app: 'app',
        'angular': 'node_modules/angular/angular.js'
    },
    meta: {
        'angular': {
            format: 'global',
            exports: 'angular'
        }
    }

});