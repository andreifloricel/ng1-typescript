import {Transition} from '@uirouter/angularjs';
import {Ng1StateDeclaration} from '@uirouter/angularjs';
import { IUserService } from './user.service';
import { IDeferred, IQService } from 'angular';
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
        user: function($user: IUserService,
                       $transition$: Transition,
                       $q: IQService
        ) {

            const deferred: IDeferred<IUser> = $q.defer();
            $user.getUserById($transition$.params().id).then( (res) => {
                deferred.resolve( res.data );
            });
            return deferred.promise;
        }
    }
};

