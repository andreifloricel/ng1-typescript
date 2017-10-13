
import * as angular from 'angular';
import { IModule } from 'angular';
import { AppComponent } from './app.component';
import { bindingModule } from './binding/binding.module';

export const appModule: IModule = 
  angular.module('app', [ bindingModule.name ])
    .component('appRoot', AppComponent);