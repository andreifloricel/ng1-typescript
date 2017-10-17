/**
 * File created by suenlue on 16.10.17.
 * Copyright (c) 2017 by netTrek GmbH & Co. KG
 */
import { IModule } from 'angular';
import * as angular from 'angular';
import { bindingModule } from './binding/binding.module';

export const appModule: IModule   =
                 angular.module( 'app', [
                     bindingModule.name
                 ] )
                     .run ( () => {
                         console.log ( 'app is running');
                     })
                     .config ( () => {
                         console.log ( 'config app module');
                     })
;