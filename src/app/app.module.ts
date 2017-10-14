
import * as angular from 'angular';
import { IModule } from 'angular';
import { bindingModule } from './binding/binding.module';

export const appModule: IModule = 
  angular.module('app', [ bindingModule.name ])
      .run ( () => {
          console.log ( 'run app' );
      })
      .config ( () => {
          console.log ( 'config app' );
      })
;