/**
 * File created by suenlue on 17.10.17.
 * Copyright (c) 2017 by netTrek GmbH & Co. KG
 */
import * as angular from 'angular';
import { IModule } from 'angular';
import { HomeComponet } from './home.component';

export const homeModule: IModule =
           angular.module( 'app.user.home', [] )
               .component( 'home', HomeComponet )
;