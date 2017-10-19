/**
 * File created by suenlue on 19.10.17.
 * Copyright (c) 2017 by netTrek GmbH & Co. KG
 */

import {Ng1StateDeclaration, Transition} from '@uirouter/angularjs';

export var contactState: Ng1StateDeclaration = <Ng1StateDeclaration>{
    url: '/contact',
    name: 'contact',
    component: 'contact'
};

export var contactFormState: Ng1StateDeclaration = <Ng1StateDeclaration>{
    url: '/:to',
    name: 'contact.form',
    component: 'contactForm',
    resolve: {
        to: function ( $transition$: Transition ) {
            return $transition$.params().to;
        }
    }
};

