/**
 * File created by suenlue on 17.10.17.
 * Copyright (c) 2017 by netTrek GmbH & Co. KG
 */

import * as angular from 'angular';
import { IModule } from 'angular';
import { sharedModule } from './shared/shared.module';

const saban: string = 'saban';


export const bindingModule: IModule = angular.module( 'app.binding' , [ sharedModule.name ] )
    .config( () => {
        console.log ( 'config binding module' );
    })
    .run( ( car: string ) => {
        console.log ( 'binding is running', car );
    })

    .constant( 'author', 'saban uenlue')
    .value( {saban: 'testing'} )
    .value( 'users', ['saban',  'uenlue'] )
;