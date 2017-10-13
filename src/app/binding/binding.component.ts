// import template from './binding.template.html!text';
import { BindingService } from './binding.service';

export const BindingComponent = {
  template: '',
  controller: class BindComponent {
    constructor ( public $bindingService: BindingService ) {}
    
    foo: number = 2;
    bar: number = 3;
    
    $onInit() {}
    
    doReset( newFoo: number = 0, newBar: number = 0 ) {
      this.foo = newFoo;
      this.bar = newBar;
    }
    
  }
};