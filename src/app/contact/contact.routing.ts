import {Transition} from '@uirouter/angularjs';
import {Ng1StateDeclaration} from '@uirouter/angularjs';

export var contactState: Ng1StateDeclaration = <Ng1StateDeclaration>{
    url: '/contact',
    name: 'contact',
    component: 'contact',
};

export var contactFormState: Ng1StateDeclaration = <Ng1StateDeclaration>{
    url: '/:to',
    name: 'contact.form',
    component: 'contactForm',
    resolve: {
        to: function($transition$: Transition) {
            return $transition$.params().to;
        }
    }
};

