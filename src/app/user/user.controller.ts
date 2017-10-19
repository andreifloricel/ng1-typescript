/**
 * File created by suenlue on 18.10.17.
 * Copyright (c) 2017 by netTrek GmbH & Co. KG
 */
import UserService from './user.service';
import { IUser } from './user.interface';

export class UserController {

    now: Date = new Date ();
    search: {firstname?: string, lastname?: string } = {};

    constructor ( public $user: UserService ) {

        // $user.addUser( <IUser>{ firstname: 'msg', lastname: Date.now().toString(10)} );

    }

}