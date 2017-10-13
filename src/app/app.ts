/**
 * File created by suenlue on 10.10.17.
 * Copyright (c) 2017 by netTrek GmbH & Co. KG
 */

import * as angular from 'angular';
import { IModule } from 'angular';
import Jan from './jan/jan';

const app: IModule = angular.module( 'app', [] );

app.value( '$saban', 'saban');

app.config( ()=> {
   console.log ( 'config' );
});

app.run( ( $saban: string ) => {
   console.log ( 'run jan', $saban, new Jan() );
});

console.log ( app );

export default app;

