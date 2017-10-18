/**
 * File created by suenlue on 18.10.17.
 * Copyright (c) 2017 by netTrek GmbH & Co. KG
 */
import { IUser } from './user.interface';
import users from './user.data';
import { IHttpService, IPromise, IRequestConfig } from 'angular';

export interface IUserService {
    users: IUser[];
    addUser ( user: IUser ): IPromise<number | void>;
}

export default class UserService implements IUserService {

    users: IUser[];
    selecterUser: IUser;

    constructor ( private $http: IHttpService, private restEndpoint: string) {
        this.init ();
    }
    
    public addUser ( user: IUser ): any {
        
        const promise: any = this.$http.post<IUser>( this.restEndpoint, user ).then( 
            ( result ) => {
                this.users.push( result.data );
            },
            ( error ) => {
                console.log ( 'err', error );
            }
        );
        
        return promise
    }

    private init () {
        this.loadUsers();
        this.getUserById( '90');
    }
    
    private loadUsers ( ): IPromise<void|IUser[]> {

        const promise: IPromise<void|IUser[]> = this.$http.get<IUser[]>( this.restEndpoint )
            .then( (response) => {
                this.users = response.data
            },
            ( error )=>{
                console.log ( error );
            });

        return promise;
    }

    private getUserById ( id: string ): IPromise<void|IUser> {

        const promise: IPromise<void|IUser> = this.$http.get<IUser>( this.restEndpoint + '/' + id )
                                                    .then( (response) => {
                                                            this.selecterUser = response.data;
                                                            console.log ( this.selecterUser );
                                                        },
                                                        ( error )=>{
                                                            console.log ( error );
                                                        })

        return promise;
    }
    
}