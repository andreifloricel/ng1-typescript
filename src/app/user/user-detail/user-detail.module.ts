/**
 * File created by suenlue on 17.10.17.
 * Copyright (c) 2017 by netTrek GmbH & Co. KG
 */
import { IModule } from 'angular';
import { UserDetailComponet } from './user-detail.component';
import * as angular from 'angular';

export const userdetailsModule: IModule =
           angular.module( 'app.user.details', [] )
               .component( 'userDetail', UserDetailComponet )
;