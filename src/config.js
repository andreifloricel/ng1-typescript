System.config({

    packages: {
        'app': {
            main: './main.js',
            defaultExtension: 'js'
        },
        "angular": { main: "index.js", defaultExtension: "js" },
        "ngSanitize": { main: "index.js", defaultExtension: "js" },
        "ngCookies": { main: "index.js", defaultExtension: "js" },
        "angularI18n": { main: "angular-locale_de-de.js", defaultExtension: "js" },
        "@uirouter/angularjs": { main: "angular-ui-router.js", defaultExtension: "js" }
    },


    map: {
        app: './',
        'angular': 'node_modules/angular/',
        'ngSanitize': 'node_modules/angular-sanitize/',
        'ngCookies': 'node_modules/angular-cookies/',
        'angularI18n': 'node_modules/angular-i18n/',
        '@uirouter/angularjs': 'node_modules/@uirouter/angularjs/release/',
        'text': 'node_modules/systemjs-plugin-text/text.js'
    },
    meta: {
        'angular': {
            format: 'global',
            exports: 'angular'
        }
    }

});