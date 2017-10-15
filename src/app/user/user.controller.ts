/**
 * File created by suenlue on 14.10.17.
 * Copyright (c) 2017 by netTrek GmbH & Co. KG
 */
import { IOnInit } from 'angular';
import IUser from './user.interface';
import users from './user.data';

export default class UserController implements IOnInit{

    users: IUser[] = [...users];
    today: Date = new Date ();
    search: {firstName?: string, lastName?: string} = {};

    constructor () {}

    $onInit (): void {
    }

    delete ( ind: number ) {
        this.users.splice( ind, 1 );
    };

}