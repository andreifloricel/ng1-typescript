/**
 * File created by suenlue on 18.10.17.
 * Copyright (c) 2017 by netTrek GmbH & Co. KG
 */
import { IUser } from './user.interface';
import users from './user.data';

export class UserController {

    now: Date = new Date ();

    users: IUser[] = users;
}