/**
 * File created by suenlue on 16.10.17.
 * Copyright (c) 2017 by netTrek GmbH & Co. KG
 */

export class NavButton {

    event: string = "MouseEvet";

    constructor ( private btn: HTMLButtonElement ) {
        this.addLister ();
    }

    private addLister () {

        this.btn.addEventListener( 'click',  ( event: MouseEvent ) => {
            console.log ( this.event, event );
           this.sayHello ();
        });
    }

    private sayHello () {
        console.log ( 'hello' );
        top.location.href = 'http://netTrek.de';
    }
}