import * as angular from 'angular';
import "ngCookies"
import { IHttpProvider, IHttpProviderDefaults, IModule } from 'angular';
import { default as UserController } from './user.controller';
import { default as UserService } from './user.service';
import { utilsModule } from '../utils/utils.module';

export const userModule: IModule =
                 angular.module ( 'app.user', [ 'ngCookies', utilsModule.name ] )
                        .config( ( $httpProvider: IHttpProvider ) => {
                            if ( !! $httpProvider.defaults.headers &&
                                    !! $httpProvider.defaults.headers.common ) {

                                $httpProvider.defaults.headers.common ['Authorization']
                                    = 'Bearer ' + window.btoa( 'netTrek' );
                            }
                        })
                        .service( '$user', UserService )
                        .controller ( { UserController } )
;