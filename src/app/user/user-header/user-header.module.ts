/**
 * File created by suenlue on 17.10.17.
 * Copyright (c) 2017 by netTrek GmbH & Co. KG
 */
import { IModule } from 'angular';
import * as angular from 'angular';
import { UserHeaderComponet } from './user-header.component';

export const userHeaderModule: IModule =
           angular.module( 'app.user.header', [] )
               .component( 'userHeader', UserHeaderComponet )
;