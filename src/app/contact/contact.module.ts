import * as angular from 'angular';
import { IModule } from 'angular';
import { ContactComponent } from './contact.component';

export const contactModule: IModule =
                 angular.module ( 'app.contact', [] )
                        .component( 'contact', ContactComponent )
;