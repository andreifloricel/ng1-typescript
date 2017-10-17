/**
 * File created by suenlue on 14.10.17.
 * Copyright (c) 2017 by netTrek GmbH & Co. KG
 */
import { IOnInit } from 'angular';

console.log ( 'BindingCtr loaded' );
export default class BindingController implements IOnInit {

    name: string;

    constructor ( private author: string ) {

        console.log ( 'BindingCtr build', author );
    }
    
    $onInit (): void {
        console.log ( 'ctrl is init' );
        this.name = `saban ${this.author}`
    }

    getName ( prefix: string = '' ): string {
        return `<strong>${prefix}</strong><script>alert("hh")</script> ${this.name}`;
    }

}