/**
 * File created by suenlue on 17.10.17.
 * Copyright (c) 2017 by netTrek GmbH & Co. KG
 */
import { IModule } from 'angular';
import { ContactComponet } from './contact.component';
import * as angular from 'angular';

export const contactModule: IModule =
           angular.module( 'app.user.contact', [] )
               .component( 'contact', ContactComponet )
;