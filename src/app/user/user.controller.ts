/**
 * File created by suenlue on 14.10.17.
 * Copyright (c) 2017 by netTrek GmbH & Co. KG
 */
import { IOnInit } from 'angular';
import { IUserService } from './user.service';
import IUser from './user.interface';

export default class UserController implements IOnInit{

    today: Date = new Date ();
    search: {firstname?: string, lastname?: string} = {};
    doHover: {color: string} = {color: 'red'};
    
    constructor ( public $user: IUserService, reverseFilter: Function ) {
        console.log ( reverseFilter ( 'saban') );
        /*
        $user.addUser( <IUser>{ firstname: `sue${this.today.getSeconds()}`,
                                lastname: `sue${this.today.getDate()}` } )
        */


    }

    $onInit (): void {
    }

    delete ( ind: number ) {
        this.$user.users.splice( ind, 1 );
    };

}