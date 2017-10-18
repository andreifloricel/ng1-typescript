import * as angular from 'angular';
import { IModule } from 'angular';
import { ContactComponent } from './contact.component';
import { contactFormModule } from './contact-form/contact-form.module';

export const contactModule: IModule =
                 angular.module ( 'app.contact', [
                     contactFormModule.name
                 ] )
                        .component( 'contact', ContactComponent )
;