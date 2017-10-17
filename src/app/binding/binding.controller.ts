/**
 * File created by suenlue on 14.10.17.
 * Copyright (c) 2017 by netTrek GmbH & Co. KG
 */
import { IOnInit } from 'angular';

console.log ( 'BindingCtr loaded' );
export default class BindingController implements IOnInit {

    imgFolder: string = 'images';
    imgFile: string = 'image-881881-galleryV9-htln-881881.jpg';
    link: string = 'http://netTrek.de';

    progress: number = 22;
    name: string;
    checked: boolean = false;
    modelOpt: any = {
        updateOn: 'default blur',
        debounce: {
            default: 500,
            blur: 0
        }
    };

    className: string = 'red';

    constructor ( private author: string ) {

        console.log ( 'BindingCtr build', author );
    }

    checkYellow (): Boolean {
        return this.name === '';
    }

    cbChg ( checked: boolean) {
        console.log ( 'checked', checked );
        if ( checked === true ) {
            this.className = 'yellow';
            this.progress = 70;
        } else {
            this.className = 'red';
            this.progress = 50;
        }
    }

    $onInit (): void {
        console.log ( 'ctrl is init' );
        this.name = `saban ${this.author}`
    }

    getName ( prefix: string = '' ): string {
        return `<strong>${prefix}</strong><script>alert("hh")</script> ${this.name}`;
    }

    onPast ( evt: Event ) {
        console.log ( evt, this.name );
    }
    
    onClick ( msg:  string, event: Event ) {
        console.log ( 'click', event );
        this.name = this.name.toUpperCase();
    }

    keyUp ( keyEvent: Event ) {
        console.log ( 'keyEvent', keyEvent);
    }

    txtChg ( msg: string ) {
        console.log ( 'msg', msg );
    }


}