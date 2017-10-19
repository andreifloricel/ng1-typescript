/**
 * File created by suenlue on 19.10.17.
 * Copyright (c) 2017 by netTrek GmbH & Co. KG
 */
import { IModule } from 'angular';
import * as angular from 'angular';
import { UserNameComponent } from './user-name.component';

export const userNameModule: IModule =
                     angular.module( 'app.user.name', [])
                         .component( 'userName', UserNameComponent )
;