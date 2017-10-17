/**
 * File created by suenlue on 16.10.17.
 * Copyright (c) 2017 by netTrek GmbH & Co. KG
 */
import { IAttributes, IAugmentedJQuery, IDirective, IDirectiveLinkFn, IScope } from 'angular';

interface IDoHoverScope extends IScope {
    doHover: string;
}

export function doHover ( /*injectable*/ ): IDirective {

    const scope = { doHover: '@' };

    const link: IDirectiveLinkFn = ( scope: IDoHoverScope,
                             elem: IAugmentedJQuery,
                             attrs: IAttributes ): void => {

        const startColor: string = elem.css( 'color' );
        /*
        const unwatch: Function = scope.$watch<string>( attrs.doHover, ( colorAttr )=> {
            color = scope.doHover || 'gree';
            console.log ( 'new color', color,  );
        } );
        */

        elem.on ('mouseenter', function () {
            elem.css( 'color', scope.doHover );
        });
        elem.on ('mouseleave', function () {
            elem.css( 'color', startColor );
        });

        elem.on ('$destroy', function () {
            elem.off( 'mouseover' );
            elem.off( 'mouseout' );
            elem.off( '$destroy' );
        });

    };

    return <IDirective>{ scope, link } ;

}