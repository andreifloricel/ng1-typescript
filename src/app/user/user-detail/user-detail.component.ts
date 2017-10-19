import { IComponentOptions } from 'angular';
import IUser from '../user.interface';

export const UserDetailComponet: IComponentOptions = {
    template: require ('./user-detail.template.html!text'),
    bindings: {
        user: '<'
    },
    controller: class UserDetailController {
        user: IUser
    }
};