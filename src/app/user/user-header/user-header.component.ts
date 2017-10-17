import { IComponentOptions, IOnInit } from 'angular';

export const UserHeaderComponet: IComponentOptions = {
    template: require ('./user-header.template.html!text'),
    bindings: {
        title: '<'
    },
    controller: class UserHeaderController implements IOnInit {

        title : string;

        constructor () {
            console.log ( 'bindings not available', this.title );
        }

        $onInit (): void {
            console.log ( 'bindings are ready', this.title );
        }
    }
};