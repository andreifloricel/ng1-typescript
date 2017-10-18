/**
 * File created by suenlue on 18.10.17.
 * Copyright (c) 2017 by netTrek GmbH & Co. KG
 */
import { IModule } from 'angular';
import * as angular from 'angular';
import { UserController } from './user.controller';
import UserServiceProvider, { IUserProvider, IUserService } from './user.service';

export const userModule: IModule =
         angular.module( 'app.user', [] )
             .controller( {UserController} )
             .provider( '$user', UserServiceProvider )
             .config( ( $userProvider: IUserProvider ) => {
                 $userProvider.setPrefix( 'hello' );
             })
             .run ( ( $user: IUserService )=>{
                 console.log ( $user.getInfo( 'yes it runs') );
             })
;