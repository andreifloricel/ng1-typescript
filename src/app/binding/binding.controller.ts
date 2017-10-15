/**
 * File created by suenlue on 14.10.17.
 * Copyright (c) 2017 by netTrek GmbH & Co. KG
 */
import { stringify } from 'querystring';
import { IOnInit, IRootElementService, IScope } from 'angular';

export default class BindingController implements IOnInit{

    name: string;
    checked: boolean = false;
    textClass: string = 'text-left';
    progress: number = 0;

    constructor ( private author: string ) {

    }

    $onInit (): void {
        this.name = `saban ${this.author}`;
    }


}