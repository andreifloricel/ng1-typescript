/**
 * File created by suenlue on 18.10.17.
 * Copyright (c) 2017 by netTrek GmbH & Co. KG
 */
import { IUser } from './user.interface';
import {
    ICacheFactoryService, ICacheObject, IHttpService, IPromise, IRequestConfig, IRequestShortcutConfig,
    ITimeoutService
} from 'angular';

export interface IUserService {
    users: IUser[];
    addUser ( user: IUser ): IPromise<number | void>;
}
export default class UserService implements IUserService {
    userCache: ICacheObject;
    users: IUser[];
    selecterUser: IUser;
    constructor ( private $http: IHttpService,
                  private restEndpoint: string,
                  private $timeout: ITimeoutService,
                  private $cacheFactory: ICacheFactoryService
    ) {
        this.init ();
    }
    public addUser ( user: IUser ): any {
        
        const promise: any = this.$http.post<IUser>( this.restEndpoint, user ).then( 
            ( result ) => {
                this.users.push( result.data );
            },
            ( error ) => {
                // console.log ( 'err', error );
            }
        );
        
        return promise;
    }
    private init () {

        this.userCache = this.$cacheFactory ( 'userCache' );
        // console.log ( this.userCache );
        // console.log ( this.userCache.info() );
        this.loadUsers();
        // this.getUserById( '90');
        /*
        this.$timeout ( ()=>{
            this.loadUsers();
        }, 2000 );
        */
    }
    private loadUsers ( ): IPromise<void|IUser[]> {


        const token: string = 'Saban Ünlü';
        const config: IRequestShortcutConfig = <IRequestShortcutConfig> {
            // params: { token },
            cache: this.userCache,
            headers: {
                'Authorization': 'Bearer ' + window.btoa( 'netTrek' )
            }
        };

        const promise: IPromise<void|IUser[]> = this.$http.get<IUser[]>( this.restEndpoint, config )
            .then( (response) => {
                this.users = response.data;
                // // console.log ( 'loadedUser', response );
                // console.log ( this.userCache.info() );
                // console.log ( this.userCache.get( this.restEndpoint) );
            },
            ( error )=>{
                // console.log ( error );
            });

        return promise;
    }

    private getUserById ( id: string ): IPromise<void|IUser> {

        const promise: IPromise<void|IUser> = this.$http.get<IUser>( this.restEndpoint + '/' + id )
                                                    .then( (response) => {
                                                            this.selecterUser = response.data;
                                                            // console.log ( this.selecterUser );
                                                        },
                                                        ( error )=>{
                                                            // console.log ( error );
                                                        });

        return promise;
    }
    
}