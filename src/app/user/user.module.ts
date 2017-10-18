/**
 * File created by suenlue on 18.10.17.
 * Copyright (c) 2017 by netTrek GmbH & Co. KG
 */
import { IModule } from 'angular';
import * as angular from 'angular';
import { UserController } from './user.controller';

export const userModule: IModule =
         angular.module( 'app.user', [] )
             .controller( {UserController} )
;