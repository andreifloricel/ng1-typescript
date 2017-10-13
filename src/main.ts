//main entry point
import * as angular from 'angular';
import { appModule } from './app/app.module';

angular.bootstrap(document, [ appModule.name ]);