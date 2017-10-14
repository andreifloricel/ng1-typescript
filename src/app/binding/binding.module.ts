
import * as angular from 'angular';
import { IModule } from 'angular';

export const bindingModule: IModule = 
  angular.module('app.binding', [])
         .run ( () => {
             console.log ( 'run app.binding' );
         })
         .config ( () => {
             console.log ( 'config app.binding' );
         })
;