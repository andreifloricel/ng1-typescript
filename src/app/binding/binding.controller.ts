/**
 * File created by suenlue on 14.10.17.
 * Copyright (c) 2017 by netTrek GmbH & Co. KG
 */
import { stringify } from 'querystring';
import { IOnInit, IRootElementService, IScope } from 'angular';

export default class BindingController implements IOnInit{

    name: string;

    content: string = 'c1';

    lorem_c1: string = '<strong>Lorem c1</strong> ipsum dolor sit amet, consectetur adipisicing elit. At cumque earum eius exercitationem repudiandae tempore? Ad, animi aspernatur blanditiis deleniti doloremque exercitationem facere in labore minus non nostrum rerum, voluptates?';

    lorem_c2: string = '<strong>Lorem c2</strong> ipsum dolor sit amet, consectetur adipisicing elit. At cumque earum eius exercitationem repudiandae tempore? Ad, animi aspernatur blanditiis deleniti doloremque exercitationem facere in labore minus non nostrum rerum, voluptates?';

    lorem: string = '<strong>Lorem</strong> ipsum dolor sit amet, consectetur adipisicing elit. At cumque earum eius exercitationem repudiandae tempore? Ad, animi aspernatur blanditiis deleniti doloremque exercitationem facere in labore minus non nostrum rerum, voluptates?';



    constructor ( private author: string ) {

    }

    $onInit (): void {
        this.name = `saban ${this.author}`;
    }


}