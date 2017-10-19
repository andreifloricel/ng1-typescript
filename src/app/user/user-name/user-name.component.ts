/**
 * File created by suenlue on 19.10.17.
 * Copyright (c) 2017 by netTrek GmbH & Co. KG
 */
import { IComponentOptions, IOnInit } from 'angular';
import { IUser } from '../user.interface';

export const UserNameComponent: IComponentOptions = <IComponentOptions> {
    template: require ( './user-name.template.html!text' ),
    bindings: {
        user: '<',
        delete: '&'
    },
    controller: class UserNameController implements IOnInit {

        user: IUser;
        delete: Function;
        
        $onInit (): void {
            // console.log ( this.user );
        }

    }
};