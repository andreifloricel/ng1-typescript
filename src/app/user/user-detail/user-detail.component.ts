import { IComponentOptions, IOnChanges, IOnChangesObject, IOnInit } from 'angular';
import IUser from '../user.interface';
import {StateService} from '@uirouter/angularjs';

export const UserDetailComponet: IComponentOptions = {
    template: require ('./user-detail.template.html!text'),
    bindings: {
        user: '<'
    },
    controller: class UserDetailController {
        user: IUser;

        constructor ( private $state: StateService) {

        }

        goBack() {
            this.$state.go( 'user');
        }
    }
};