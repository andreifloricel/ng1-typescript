import { IComponentOptions } from 'angular';
import IUser from '../user.interface';

export const UserNameComponent: IComponentOptions = {
    template: require ('./user-name.template.html!text'),
    bindings: {
        user: '<',
        delete: '&'
    },
    controller: class UserNameController {
        user : IUser;
    }
};