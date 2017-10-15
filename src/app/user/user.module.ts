import * as angular from 'angular';
import "ngCookies"
import { IModule } from 'angular';
import { default as UserController } from './user.controller';
import { default as UserService } from './user.service';

export const userModule: IModule =
                 angular.module ( 'app.user', [ 'ngCookies' ] )
                        .service( '$user', UserService )
                        .controller ( { UserController } )
;