import * as angular from 'angular';
import { IModule } from 'angular';
import { reverse } from './reverse.filter';

export const utilsModule: IModule =
                 angular.module ( 'app.utils', [  ] )
                     .filter({ reverse } )
;