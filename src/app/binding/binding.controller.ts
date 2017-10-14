/**
 * File created by suenlue on 14.10.17.
 * Copyright (c) 2017 by netTrek GmbH & Co. KG
 */
import { stringify } from 'querystring';
import { IOnInit, IRootElementService, IScope } from 'angular';

export default class BindingController implements IOnInit{

    name: string;
    checked: boolean = false;

    constructor ( private author: string,
                  private $scope: IScope,
                  private $element: IRootElementService ) {

    }

    $onInit (): void {
        this.name = `saban ${this.author}`;
    }

    getName ( prefix: string = 'n:= ' ): string {
        return `<strong>${prefix}</strong> ${this.name}`;
    }

    chgName ( event: Event, name: string = 'john doe' ) {
        console.log ( event );
        this.name = name;
    }

    nameChanged ( ) {
        console.log ( this.name );
    }

    cbChanged ( val?: any ) {
        console.log ( val );
    }

}