import { IComponentOptions } from 'angular';

export const ContactFormComponent: IComponentOptions = {
    template: require ('./contact-form.template.html!text'),
    bindings: {to: '<'},
    controller: class ContactFormController {
        to: string;
    }
};