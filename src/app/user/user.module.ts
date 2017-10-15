import * as angular from 'angular';
import { IModule } from 'angular';
import { default as UserController } from './user.controller';

export const userModule: IModule =
                 angular.module ( 'app.user', [] )
                        .controller ( { UserController } )
;