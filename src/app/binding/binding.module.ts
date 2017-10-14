import * as angular from 'angular';
import { IControllerProvider, IModule } from 'angular';
import IProvideService = angular.auto.IProvideService;
import BindingController from './binding.controller';

export const bindingModule: IModule =
                 angular.module ( 'app.binding', [] )

                        .constant<string> ( 'author', 'uenlue' )

                        .run ( ( author: string, copyright: string ) => {
                            console.log ( 'run app.binding', author, copyright );
                        } )
                        .config ( ( $provide: IProvideService,
                                             $controllerProvider: IControllerProvider ) => {
                            console.log ( 'config app.binding' );
                            $provide.constant ( 'copyright', 'netTrek' );
                            $controllerProvider.register( 'BindingController', BindingController );
                        } )
;