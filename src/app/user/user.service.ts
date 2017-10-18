/**
 * File created by suenlue on 18.10.17.
 * Copyright (c) 2017 by netTrek GmbH & Co. KG
 */
import { IServiceProvider } from 'angular';

export interface IUserProvider {
    setPrefix ( prefix: string ): void;
}

export interface IUserService {
    getInfo ( msg?: string ): string;
}


class UserService implements IUserService {


    constructor ( private prefix: string ) {}


    getInfo ( msg?: string | undefined ): string {
        if ( msg === undefined ) {
            msg = 'empty';
        }
        return `${this.prefix} ${msg}`;
    }
}

export default class UserServiceProvider implements IServiceProvider, IUserProvider {

    private prefix: string = '';

    setPrefix ( prefix: string ): void {
        this.prefix = prefix;
    }


    $get ():  IUserService {
        return new UserService( this.prefix );
    }

}