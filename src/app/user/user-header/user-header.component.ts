/**
 * File created by suenlue on 19.10.17.
 * Copyright (c) 2017 by netTrek GmbH & Co. KG
 */
import { IComponentOptions, IOnChanges, IOnInit, ITimeoutService } from 'angular';

export const UserHeaderComponent: IComponentOptions = <IComponentOptions> {
    template: require ( './user-header.template.html!text' ),
    bindings: {
        title: '<',
        update: '&'
    },
    controller: class UserHeaderController implements IOnInit, IOnChanges{

        title: string = 'i am a title';
        update: Function;

        constructor ( $timeout: ITimeoutService ) {
            console.log ( 'userHeader constr', this.title );
        }

        $onChanges ( onChangesObj: angular.IOnChangesObject ): void {
            console.log ( onChangesObj );
        }

        $onInit (): void {
            console.log ( 'userHeader inti', this.title );
        }

    }
};