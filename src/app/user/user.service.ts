/**
 * File created by suenlue on 15.10.17.
 * Copyright (c) 2017 by netTrek GmbH & Co. KG
 */
import { IServiceProvider } from 'angular';
import IUser from './user.interface';
import users from './user.data';

export interface IUserService {
    users: IUser[];
}

export default class UserService implements IUserService {
    users: IUser[] = [...users];
}