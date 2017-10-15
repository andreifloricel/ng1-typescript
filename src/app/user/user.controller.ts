/**
 * File created by suenlue on 14.10.17.
 * Copyright (c) 2017 by netTrek GmbH & Co. KG
 */
import { IOnInit } from 'angular';
import { IUserService } from './user.service';

export default class UserController implements IOnInit{

    today: Date = new Date ();
    search: {firstname?: string, lastname?: string} = {};

    constructor ( public $user: IUserService ) {
    }

    $onInit (): void {
    }

    delete ( ind: number ) {
        this.$user.users.splice( ind, 1 );
    };

}