import * as angular from 'angular';
import { IModule } from 'angular';
import { default as UserController } from './user.controller';
import UserServiceProvider, { IUserProvider, IUserService } from './user.service';

export const userModule: IModule =
                 angular.module ( 'app.user', [] )
                        .provider( '$user', UserServiceProvider )
                        .controller ( { UserController } )
                        .config( ( $userProvider: IUserProvider ) => {
                            $userProvider.setHourAsCountdownUnit();
                        })
                        .run ( ( $user: IUserService ) => {
                            console.log ( `${$user.next( 11, 4 )} hours till your birthday` );
                        })
;