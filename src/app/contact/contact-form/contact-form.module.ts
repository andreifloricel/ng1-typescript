/**
 * File created by suenlue on 17.10.17.
 * Copyright (c) 2017 by netTrek GmbH & Co. KG
 */
import * as angular from 'angular';
import { IModule } from 'angular';
import { ContactFormComponent } from './contact-form.component';

export const contactFormModule: IModule =
           angular.module( 'app.contact.form', [] )
               .component( 'contactForm', ContactFormComponent )
;