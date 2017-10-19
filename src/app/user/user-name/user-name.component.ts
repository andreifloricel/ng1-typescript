/**
 * File created by suenlue on 19.10.17.
 * Copyright (c) 2017 by netTrek GmbH & Co. KG
 */
import { IComponentOptions, IIntervalService, IOnDestroy, IOnInit, IPromise } from 'angular';
import { IUser } from '../user.interface';

export const UserNameComponent: IComponentOptions = <IComponentOptions> {
    template: require ( './user-name.template.html!text' ),
    bindings: {
        user: '<',
        delete: '&'
    },
    controller: class UserNameController implements IOnInit, IOnDestroy {
        intervalPromis: IPromise<any>;

        user: IUser;
        delete: Function;

        constructor ( private $interval: IIntervalService ) {
            this.intervalPromis = $interval( ()=>{}, 1000 );
        }
        
        $onInit (): void {
            // console.log ( this.user );
        }

        $onDestroy (): void {
            console.log ( 'bya', this.user );
            this.$interval.cancel( this.intervalPromis );
        }

        click ( user: IUser ) {
            this.delete ( { $event: this.user } );
        }

    }
};