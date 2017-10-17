/**
 * File created by suenlue on 16.10.17.
 * Copyright (c) 2017 by netTrek GmbH & Co. KG
 */
import { IAttributes, IAugmentedJQuery, IDirective, IDirectiveLinkFn, IScope } from 'angular';

interface IDoHoverScope extends IScope {
    doHover: {color: string};
}

export function doHover ( /*injectable*/ ): IDirective {

    const scope = {
        doHover: '<',
    };

    const link: IDirectiveLinkFn = ( scope: IDoHoverScope,
                             elem: IAugmentedJQuery,
                             attrs: IAttributes,
                                     ...rest: any[] ): void => {

        const startColor: string = elem.css( 'color' );

        elem.on ('mouseenter', function () {
            elem.css( 'color', scope.doHover.color );
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