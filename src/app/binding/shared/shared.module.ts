/**
 * File created by suenlue on 17.10.17.
 * Copyright (c) 2017 by netTrek GmbH & Co. KG
 */
 

import { IModule } from 'angular';
import * as angular from 'angular';

export const sharedModule: IModule = angular.module( 'app.share', [] )
    .config( () => {
        console.log ( 'config shared module' );
    })
;