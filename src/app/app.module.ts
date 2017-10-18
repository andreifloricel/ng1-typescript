import * as angular from 'angular';
import { IDocumentService, ILocationProvider, ILogProvider, ILogService, IModule, IWindowService } from 'angular';
import { bindingModule } from './binding/binding.module';
import 'angularI18n';
import 'ngSanitize';
import '@uirouter/angularjs';

import { userModule } from './user/user.module';
import { homeModule } from './home/home.module';
import { contactModule } from './contact/contact.module';
import { homeState } from './home/home.routing';
import { userDetailState, userState } from './user/user.routing';
import { contactState } from './contact/contact.routing';

import { AppComponent } from './app.component';
import {UrlService, StateProvider, Ng1StateDeclaration} from '@uirouter/angularjs';
import { userDetailModule } from './user/user-detail/user-detail.module';

export const appModule: IModule =
                 angular.module ( 'app', [
                     bindingModule.name,
                     homeModule.name,
                     contactModule.name,
                     userModule.name,
                     userDetailModule.name,
                     'ngSanitize',
                     'ui.router'
                 ] )

                        .config ( ( $stateProvider: StateProvider,
                                    $urlServiceProvider: UrlService,
                                    $locationProvider: ILocationProvider) => {

                            $locationProvider.html5Mode( true );
                            $urlServiceProvider.rules.otherwise({ state: 'user' });
                            $stateProvider.state ( homeState );
                            $stateProvider.state ( userState );
                            $stateProvider.state ( userDetailState );
                            $stateProvider.state ( contactState);

                        } )
                        .component ( 'appRoot', AppComponent )
;