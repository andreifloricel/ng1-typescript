/**
 * File created by suenlue on 14.10.17.
 * Copyright (c) 2017 by netTrek GmbH & Co. KG
 */
import { stringify } from 'querystring';
import { IOnInit, IRootElementService, IScope } from 'angular';

export default class BindingController implements IOnInit{

    name: string;

    imgUrl: string = `http://www.nettrek.de/wp-content/uploads/2015/03/nettrek_gf_saban_uenlue-300x199.jpg`;
    link: string = 'http://netTrek.de';

    constructor ( private author: string ) {

    }

    $onInit (): void {
        this.name = `saban ${this.author}`;
    }


}