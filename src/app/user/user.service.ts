/**
 * File created by suenlue on 15.10.17.
 * Copyright (c) 2017 by netTrek GmbH & Co. KG
 */
import IUser from './user.interface';
import { IHttpPromise, IHttpResponse, IHttpService, IPromise, IRequestConfig } from 'angular';

interface ICookiesOptions {
    path?: string;
    domain?: string;
    expires?: string | Date;
    secure?: boolean;
}

interface ICookiesService {
    get( key: string ): string;

    getObject( key: string ): any;

    getObject<T>( key: string ): T;

    getAll(): any;

    put( key: string, value: string, options?: ICookiesOptions ): void;

    putObject( key: string, value: any, options?: ICookiesOptions ): void;

    remove( key: string, options?: ICookiesOptions ): void;
}

export interface IUserService {
    start: Date;
    last: Date;
    users: IUser[];
}

export default class UserService implements IUserService {

    static $inject: string[] = [ '$cookies',
                                 '$http'
    ];

    start: Date;
    last: Date;
    users: IUser[];

    constructor ( private $cookies: ICookiesService, private $http: IHttpService ) {
        this.init ();
    }

    private init (): any {

        const lastDate: string | undefined = this.$cookies.get ( 'last' );
        this.last                          = this.start = new Date ();
        if ( lastDate !== undefined ) {
            this.last = new Date ( lastDate );
        }

        this.$cookies.put ( 'last', this.start.toString () );

        // this.$cookies.putObject(  'userData' , {username:'saban', lastVisit:this.last} );
        // this.$cookies.remove( 'last' );

    }

    private loadUsers (): IPromise<void|IUser[]> {
        // get<T>(url: string, config?: IRequestShortcutConfig): IHttpPromise<T>;
        const promise: IPromise<void|IUser[]> = this.$http.get<IUser[]> ( 'mock/data.json' )
                          .then ( // IHttpResponse<IUser[]>
                              result => this.users = result.data,
                              ( error ) => {
                                  console.error ( error );
                              }
                          );

        return promise;
    }

}