import { IComponentOptions } from 'angular';
import { IUserService } from './user.service';
import IUser from './user.interface';

export const UserComponent: IComponentOptions = {
    template: require ('./user.template.html!text'),
    controller: class UserController {

        today: Date = new Date ();
        search: {firstname?: string, lastname?: string} = {};
        doHover: {color: string} = {color: 'red'};

        constructor ( public $user: IUserService, reverseFilter: Function ) {
        }


        delete ( user: IUser ) {
            this.$user.users.splice( this.$user.users.indexOf(user), 1 );
        };

    }
};