/**
 * File created by suenlue on 16.10.17.
 * Copyright (c) 2017 by netTrek GmbH & Co. KG
 */


interface ICar {

    brand: string;
    type: string;
    prodDate?: Date;

    sayHell (): void;
}