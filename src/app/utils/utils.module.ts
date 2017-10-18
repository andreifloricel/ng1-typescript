/**
 * File created by suenlue on 18.10.17.
 * Copyright (c) 2017 by netTrek GmbH & Co. KG
 */
import { IModule } from 'angular';
import * as angular from 'angular';
import reverse from './reverse.filter';
import doHover from './do-hover.directive';

export const utilsModule: IModule =
    angular.module ( 'app.utils', [] )
        .filter( { reverse } )
        .directive( {doHover} )
        .run ( ( reverseFilter: Function ) => {
            // console.log ( reverseFilter ( 'saban') );
        })
;