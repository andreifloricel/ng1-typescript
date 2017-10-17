import * as angular from 'angular';
import { IModule } from 'angular';
import IProvideService = angular.auto.IProvideService;

export const bindingModule: IModule =
                 angular.module ( 'app.binding', [] )

                        .constant<string> ( 'author', 'uenlue' )

                        .run ( ( author: string, copyright: string ) => {
                            // console.log ( 'run app.binding', author, copyright );
                        } )
                        .config ( ( $provide: IProvideService ) => {
                            // console.log ( 'config app.binding' );
                            $provide.constant ( 'copyright', 'netTrek' );
                        } )
;
