
import * as angular from 'angular';
import { IModule } from 'angular';
import { BindingComponent } from './binding.component';
import { BindingService } from './binding.service';

export const bindingModule: IModule = 
  angular.module('app.binding', [])
    .component('appBinding', BindingComponent)
    .service('$bindingService', BindingService);