
import * as angular from 'angular';
import { IModule } from 'angular';

export const bindingModule: IModule = 
  angular.module('app.binding', [])

         .value( 'author', 'saban ünlü' )
         .value( 'author', 'saban ünlü 2' )
         .value( 'author', 'saban ünlü 3' )

         .run ( ( author: string ) => {
             console.log ( 'run app.binding', author );
         })
         .config ( ( ) => {
             console.log ( 'config app.binding' );
         })
;