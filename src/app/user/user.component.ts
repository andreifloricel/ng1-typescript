import { IComponentOptions, IOnInit, ITimeoutService } from 'angular';
import { IUserService } from './user.service';
import IUser from './user.interface';

export const UserComponent: IComponentOptions = {
    template: require ('./user.template.html!text'),
    controller: class UserController implements IOnInit {


        today: Date = new Date ();
        search: {firstname?: string, lastname?: string} = {};
        doHover: {color: string} = {color: 'red'};

        title: string = 'my user List';

        constructor ( public $user: IUserService,
                      private $timeout: ITimeoutService ) {
        }

        $onInit (): void {
            /*
            this.$timeout ( ()=>{
                this.title = 'user list'
            } , 1000 );
            */
        }


        delete ( user: IUser ) {
            this.$user.users.splice( this.$user.users.indexOf(user), 1 );
        };

    }
};