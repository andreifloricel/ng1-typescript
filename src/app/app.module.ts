import * as angular from 'angular';
import { IDocumentService, ILocationProvider, ILogProvider, ILogService, IModule, IWindowService } from 'angular';
import { bindingModule } from './binding/binding.module';
import 'angularI18n';
import 'ngSanitize';
import '@uirouter/angularjs';
import { userModule } from './user/user.module';
import { AppComponent } from './app.component';

import {StateProvider, UrlService} from '@uirouter/angularjs';
import { userState } from './user/user.route';
import { homeState } from './user/home/home.route';
import { contactState } from './user/contact/contact.route';
import { contactModule } from './user/contact/contact.module';
import { homeModule } from './user/home/home.module';

export const appModule: IModule =
  angular.module('app', [
      bindingModule.name,
      userModule.name,
      homeModule.name,
      contactModule.name,
      'ngSanitize',
      'ui.router'
  ])

         .config ( (
             $stateProvider: StateProvider,
             $locationProvider: ILocationProvider,
             $urlServiceProvider: UrlService
         ) => {

             $locationProvider.html5Mode( true );
             $urlServiceProvider.rules.otherwise({ state: 'home' });

             $stateProvider.state( homeState  );
             $stateProvider.state( contactState  );
             $stateProvider.state( userState  );

             console.log ( $stateProvider );

         })
        .component( 'appRoot', AppComponent )
;