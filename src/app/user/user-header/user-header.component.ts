/**
 * File created by suenlue on 19.10.17.
 * Copyright (c) 2017 by netTrek GmbH & Co. KG
 */
import { IComponentOptions, IScope, ITimeoutService } from 'angular';

export const UserHeaderComponent: IComponentOptions = <IComponentOptions> {
    template: require ( './user-header.template.html!text' ),
    bindings: {
        title: '<',
        update: '&'
    },
    controller: class UserHeaderController {

        title: string = 'i am a title';
        update: Function;

        constructor ( $timeout: ITimeoutService ) {
            $timeout( ()=>{
                console.log ( 'timeout' );
                this.update ( {
                    $event: 'child call hallo'
                });
            })

        }

    }
};