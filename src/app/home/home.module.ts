import * as angular from 'angular';
import { IHttpProvider, IModule } from 'angular';
import { HomeComponent } from './home.component';

export const homeModule: IModule =
                 angular.module ( 'app.home', [] )
                        .component( 'home', HomeComponent )
;