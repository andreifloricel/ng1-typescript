import { IComponentOptions } from 'angular';

export const UserHeaderComponet: IComponentOptions = {
    template: require ('./user-header.template.html!text'),
    controller: class UserHeaderController {
        title = 'User Header Works with binding'
    }
};