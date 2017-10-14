//main entry point
import * as angular from 'angular';
import { appModule } from './app/app.module';

angular.element( document ).ready( ( ) => {
   angular.bootstrap( document, [appModule.name] );
});