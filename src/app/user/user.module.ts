/**
 * File created by suenlue on 18.10.17.
 * Copyright (c) 2017 by netTrek GmbH & Co. KG
 */
import * as angular from 'angular';
import { IModule } from 'angular';
import { UserController } from './user.controller';
import { default as UserService } from './user.service';
import { utilsModule } from '../utils/utils.module';
import { userHeaderModule } from './user-header/user-header.module';
import { userNameModule } from './user-name/user-name.module';

export const userModule: IModule =
         angular.module( 'app.user', [
             utilsModule.name,
             userHeaderModule.name,
             userNameModule.name
         ] )
             .controller( {UserController} )
             .service('$user', UserService)
             .value ( 'restEndpoint', 'http://rest-api.flexlab.de/index.php/api/user' )
;