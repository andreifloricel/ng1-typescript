/**
 * File created by suenlue on 19.10.17.
 * Copyright (c) 2017 by netTrek GmbH & Co. KG
 */


import {Ng1StateDeclaration, Transition} from '@uirouter/angularjs';
import { IDeferred, IQService, ITimeoutService } from 'angular';
import { IUserService } from './user.service';
import IUser from './user.interface';

export var userState: Ng1StateDeclaration = <Ng1StateDeclaration>{
    url: '/user',
    name: 'user',
    component: 'user'
};


export var userDetailState: Ng1StateDeclaration = <Ng1StateDeclaration>{
    url: '/user/{id}',
    name: 'userDetail',
    component: 'userDetail',
    resolve: {
        user: function ( $q: IQService, $transition$: Transition, $user:IUserService ) {

            const deffered: IDeferred<IUser> = $q.defer();
            $user.getUserById( $transition$.params().id).then( ( response ) => {
                deffered.resolve( response.data );
            });
            return deffered.promise;
        }
    }
};

