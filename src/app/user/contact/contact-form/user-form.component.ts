import { IComponentOptions } from 'angular';

export const ContactFormComponet: IComponentOptions = {
    template: require ('./user-form.template.html!text'),
    bindings: {
        to: '<'
    },
    controller: class ContactFormController {
        to: string
    }
};