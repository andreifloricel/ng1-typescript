import { IComponentOptions, IOnInit } from 'angular';
import IUser from '../user.interface';

export const UserNameComponent: IComponentOptions = {
    template: require ('./user-name.template.html!text'),
    bindings: {
        user: '<',
        delete: '&'
    },
    require: { userCtrl: '^user' },
    controller: class UserNameController implements IOnInit{

        user : IUser;
        userCtrl: any;
        
        $onInit (): void {
            // console.log ( this.userCtrl ); //avoid because ob ng2+ - use & @Output
        }
    }
};