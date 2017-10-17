import { IComponentOptions } from 'angular';

export const UserHeaderComponet: IComponentOptions = {
    template: require ('./user-header.template.html!text'),
    bindings: {
        title: '='
    },
    controller: class UserHeaderController {
        title : string;
    }
};