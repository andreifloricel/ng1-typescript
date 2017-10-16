//main entry point

import { BMW, Car, sayHello } from './app/Car';
import { NavButton } from './app/nav/NavButton';

const car: Car = new Car ();
const bmw: BMW = new BMW ();

sayHello() ;

const btn: HTMLButtonElement = <HTMLButtonElement>document.getElementById( 'btn');

const navBtn: NavButton = new NavButton ( btn );