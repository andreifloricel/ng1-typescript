/**
 * File created by suenlue on 14.10.17.
 * Copyright (c) 2017 by netTrek GmbH & Co. KG
 */
import { stringify } from 'querystring';
import { IOnInit, IRootElementService, IScope } from 'angular';

export default class BindingController implements IOnInit{

    name: string;

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

}