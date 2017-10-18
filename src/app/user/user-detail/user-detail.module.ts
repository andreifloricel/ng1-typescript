/**
 * File created by suenlue on 17.10.17.
 * Copyright (c) 2017 by netTrek GmbH & Co. KG
 */
import * as angular from 'angular';
import { IModule } from 'angular';
import { UserDetailComponet } from './user-detail.component';

export const userDetailModule: IModule =
           angular.module( 'app.user.detail', [] )
               .component( 'userDetail', UserDetailComponet )
;