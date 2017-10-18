/**
 * File created by suenlue on 16.10.17.
 * Copyright (c) 2017 by netTrek GmbH & Co. KG
 */
import { IModule } from 'angular';
import * as angular from 'angular';
import { bindingModule } from './binding/binding.module';
import IInjectorService = angular.auto.IInjectorService;
import { userModule } from './user/user.module';


export const appModule: IModule   =
                 angular.module( 'app', [
                     'ngSanitize',
                     bindingModule.name,
                     userModule.name
                 ] )
                     .run ( ( author: string ) => {
                         console.log ( 'app is running', author );
                     })
                     .config ( () => {
                         console.log ( 'config app module');
                     })
;