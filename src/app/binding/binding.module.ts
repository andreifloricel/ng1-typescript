import * as angular from 'angular';
import { IControllerProvider, IModule } from 'angular';
import { sharedModule } from './shared/shared.module';
import BindingController from './binding.controller';
import MsgController from './msg.controller';


export const bindingModule: IModule = angular.module( 'app.binding' , [ sharedModule.name ] )


     // .controller({ BindingController }  )

     .config( ( $controllerProvider: IControllerProvider) => {
        // console.log ( 'config binding module' );
         $controllerProvider.register('BindingController', BindingController );
    })
    .run( ( ) => {
        // console.log ( 'binding is running' );
    })

    .constant( 'author', 'uenlue')

;