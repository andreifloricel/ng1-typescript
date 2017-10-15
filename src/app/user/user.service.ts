/**
 * File created by suenlue on 15.10.17.
 * Copyright (c) 2017 by netTrek GmbH & Co. KG
 */
import IUser from './user.interface';
import users from './user.data';

interface ICookiesOptions {
    path?: string;
    domain?: string;
    expires?: string | Date;
    secure?: boolean;
}


interface ICookiesService {
    get(key: string): string;
    getObject(key: string): any;
    getObject<T>(key: string): T;
    getAll(): any;
    put(key: string, value: string, options?: ICookiesOptions): void;
    putObject(key: string, value: any, options?: ICookiesOptions): void;
    remove(key: string, options?: ICookiesOptions): void;
}

export interface IUserService {
    start: Date;
    last: Date;
    users: IUser[];
}

export default class UserService implements IUserService {
    static $inject: string[] = ['$cookies'];

    start: Date;
    last: Date;
    users: IUser[] = [...users];

    constructor ( private $cookies: ICookiesService ) {
        this.init ();
    }
    
    private init (): any {
        
        const lastDate: string | undefined = this.$cookies.get( 'last' );
        this.last = this.start = new Date ();
        if ( lastDate !== undefined ) {
            this.last = new Date ( lastDate );
        }

        this.$cookies.put( 'last' , this.start.toString() );

        // this.$cookies.putObject(  'userData' , {username:'saban', lastVisit:this.last} );
        // this.$cookies.remove( 'last' );
    }
}