/**
 * File created by suenlue on 18.10.17.
 * Copyright (c) 2017 by netTrek GmbH & Co. KG
 */
import { IModule } from 'angular';
import * as angular from 'angular';
import { UserController } from './user.controller';
import UserServiceProvider, { IUserService, default as UserService } from './user.service';

export const userModule: IModule =
         angular.module( 'app.user', [] )
             .controller( {UserController} )
             .service('$user', UserService)
             .value ( 'restEndpoint', 'http://rest-api.flexlab.de/index.php/api/user' )
;