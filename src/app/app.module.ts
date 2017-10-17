import * as angular from 'angular';
import { IDocumentService, ILogProvider, ILogService, IModule, IWindowService } from 'angular';
import { bindingModule } from './binding/binding.module';
import 'angularI18n';
import 'ngSanitize';
import { userModule } from './user/user.module';
import { AppComponent } from './app.component';

export const appModule: IModule =
  angular.module('app', [ bindingModule.name, userModule.name, 'ngSanitize' ])

         .run ( ( author: string,
                  $log: ILogService,
                  $window: IWindowService,
                  $document: IDocumentService ) => {

             // $log.log( $window, $document );

             $document.find( 'body').css ( 'background-color', 'gray');

         })

         .config ( ( $logProvider: ILogProvider) => {
             $logProvider.debugEnabled( false );
         })
        .component( 'appRoot', AppComponent )
;