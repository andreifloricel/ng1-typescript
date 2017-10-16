/**
 * File created by suenlue on 16.10.17.
 * Copyright (c) 2017 by netTrek GmbH & Co. KG
 */

export var users: string[] = ['saban', 'paul'];

export function sayHello () {
    console.log ( 'hello');
}

export class Car implements ICar {

    brand: string;
    type: string;
    prodDate?: Date | undefined;

    constructor () {
        console.log ( 'hello car' );
        this.update( true, 1, 'saban');
    }

    sayHell (): void {
        console.log ( 'hello' + this.brand );
    }

    private update ( is: boolean, number: number, string: string ) {

    }
}


export class BMW extends Car {

}


