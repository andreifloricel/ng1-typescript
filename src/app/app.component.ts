// import appHTML from './app.template.html!text';

export const AppComponent = {
  template: '',
  bindings: {
    title: '<'
  },
  controller: class AppComponent {
    
    //@Input
    title: string;
    
    $onInit() {
      this.title = this.title || 'not defined';
    }
    
  }
};