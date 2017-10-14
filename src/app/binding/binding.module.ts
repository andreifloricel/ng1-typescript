import * as angular from 'angular';
import { IModule } from 'angular';

export const bindingModule: IModule =
                 angular.module ( 'app.binding', [] )
                        .constant<string> ( 'author', 'uenlue' )
                        .constant<string> ( 'author', 'uenlue1' )
                        .constant<string> ( 'author', 'uenlue2' )
                        .run ( ( author: string ) => {
                            console.log ( 'run app.binding', author );
                        })
                        .config ( ( ) => {
                            console.log ( 'config app.binding' );
                        })
                ;