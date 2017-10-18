/**
 * File created by suenlue on 18.10.17.
 * Copyright (c) 2017 by netTrek GmbH & Co. KG
 */
import { IAttributes, IDirective, IDirectiveLinkFn, IScope } from 'angular';

interface IDoHoverScope extends IScope {
    doHover: string;
}

export default function doHover ( /*inject*/ ): IDirective {

    const scope = {
        doHover: "="
    };

    const link: IDirectiveLinkFn = ( scope: IDoHoverScope,
                                     elem: JQLite,
                                     attrs: IAttributes ) => {

        console.log ( scope );

        const startColor: string = elem.css( 'color' );

        elem.on( 'mouseenter' , () => {
            elem.css( 'color', scope.doHover );
        });

        elem.on( 'mouseleave' , () => {
            elem.css( 'color', startColor );
        });


        elem.on( '$destroy' , () => {
            elem.off( 'mouseleave' );
            elem.off( 'mouseenter' );
            elem.off( '$destroy' );
            elem.css( 'color', startColor );
            console.log ( 'bye bye' );
        });


    };

    return <IDirective>{
        link,
        scope
    };
}