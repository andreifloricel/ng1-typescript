
import * as angular from 'angular';
import { IModule } from 'angular';
import { bindingModule } from './binding/binding.module';
import "ngSanitize";
import { userModule } from './user/user.module';

export const appModule: IModule =
  angular.module('app', [ bindingModule.name, userModule.name, 'ngSanitize' ])

         .run ( ( author: string ) => {
             // console.log ( 'run app', author );
         })

         .config ( () => {
              // console.log ( 'config app' );
         })
;