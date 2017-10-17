import * as angular from 'angular';
import { IModule } from 'angular';
import { reverse } from './reverse.filter';
import { doHover } from './do-hover.directive';

export const utilsModule: IModule =
                 angular.module ( 'app.utils', [  ] )
                     .filter( { reverse } )
                     .directive( { doHover } )
;