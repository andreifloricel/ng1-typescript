
import * as angular from 'angular';
import { IModule, IRootScopeService } from 'angular';
import { bindingModule } from './binding/binding.module';
import "ngSanitize";


interface IMyRoot extends IRootScopeService {
    rootval: string;
}

export const appModule: IModule =
  angular.module('app', [ bindingModule.name, 'ngSanitize' ])

         .run ( ( author: string, $rootScope: IMyRoot ) => {
             // console.log ( 'run app', author );
             $rootScope.rootval = 'root';
         })

         .config ( () => {
              // console.log ( 'config app' );
         })
;