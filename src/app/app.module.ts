/**
 * File created by suenlue on 16.10.17.
 * Copyright (c) 2017 by netTrek GmbH & Co. KG
 */
import { IModule } from 'angular';
import * as angular from 'angular';
import { bindingModule } from './binding/binding.module';
import IInjectorService = angular.auto.IInjectorService;

export const appModule: IModule   =
                 angular.module( 'app', [
                     bindingModule.name
                 ] )
                        .value( {car: 'bmw'} )

                     .run ( ( author: string,
                              car: string,
                              users: string[] ) => {
                         console.log ( 'app is running', car );
                     })
                     .config ( () => {
                         console.log ( 'config app module');
                     })
                        .run( ( phone: string, $injector: IInjectorService ) => {
                            console.log ( 'app', phone, $injector );

                        })
;