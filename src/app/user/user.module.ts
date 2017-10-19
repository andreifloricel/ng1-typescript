import * as angular from 'angular';
import "ngCookies"
import { IHttpProvider, IHttpProviderDefaults, IModule } from 'angular';
import { default as UserService } from './user.service';
import { utilsModule } from '../utils/utils.module';
import { userHeaderModule } from './user-header/user-header.module';
import { userNameModule } from './user-name/user.name.module';
import { UserComponent } from './user.component';
import { userdetailsModule } from './user-detail/user-detail.module';

export const userModule: IModule =
                 angular.module ( 'app.user', [
                     'ngCookies',
                     userHeaderModule.name,
                     userNameModule.name,
                     userdetailsModule.name,
                     utilsModule.name
                 ] )
                        .config( ( $httpProvider: IHttpProvider ) => {
                            if ( !! $httpProvider.defaults.headers &&
                                    !! $httpProvider.defaults.headers.common ) {

                                $httpProvider.defaults.headers.common ['Authorization']
                                    = 'Bearer ' + window.btoa( 'netTrek' );
                            }
                        })
                        .service( '$user', UserService )
                        .component( 'user', UserComponent )
;