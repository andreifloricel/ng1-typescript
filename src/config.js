System.config({

    packages: {
        'app': {
            main: './main.js',
            defaultExtension: 'js'
        },
        "angular": { main: "index.js", defaultExtension: "js" },
        "ngSanitize": { main: "index.js", defaultExtension: "js" },
    },


    map: {
        app: './',
        'angular': 'node_modules/angular/',
        'ngSanitize': 'node_modules/angular-sanitize/',
        'text': 'node_modules/systemjs-plugin-text/text.js'
    },
    meta: {
        'angular': {
            format: 'global',
            exports: 'angular'
        }
    }

});