//main entry point

import { appModule } from './app/app.module';
import * as angular from 'angular';

angular.element( 'document' ).ready(
    () => {
        console.log ( 'dom is ready' );
        angular.bootstrap( 'document',
            [ appModule.name ] )
    }
);
