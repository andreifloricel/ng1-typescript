import * as angular from 'angular';
import { IModule, IOnInit, IScope } from 'angular';
import IProvideService = angular.auto.IProvideService;
import BindingController from './binding.controller';

interface IParentScope extends IScope {
    val1: string;
    val2: string;
}

class ParentCtrl implements IOnInit{

    constructor ( public $scope: IParentScope ) {}

    $onInit (): void {
        this.$scope.val1 = 'val1 frpm Parent';
        this.$scope.val2 = 'val2 frpm Parent';
    }
}

class ChildCtrl {}

export const bindingModule: IModule =
                 angular.module ( 'app.binding', [] )

                        .constant<string> ( 'author', 'uenlue' )

                        .run ( ( author: string, copyright: string ) => {
                            // console.log ( 'run app.binding', author, copyright );
                        } )
                        .config ( ( $provide: IProvideService ) => {
                            // console.log ( 'config app.binding' );
                            $provide.constant ( 'copyright', 'netTrek' );
                        } )
                        .controller ( { BindingController } )
                        .controller ( { ParentCtrl } )
                        .controller ( { ChildCtrl } )
;