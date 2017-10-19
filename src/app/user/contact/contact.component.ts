import { IComponentOptions } from 'angular';

import {StateService} from '@uirouter/angularjs';

export const ContactComponet: IComponentOptions = {
    template: require ('./contact.template.html!text'),
    controller: class ContactController {

        constructor ( private $state: StateService ) {}

        goHome () {
            this.$state.go( 'home' );
        }
    }
};