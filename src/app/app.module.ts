/**
 * File created by suenlue on 16.10.17.
 * Copyright (c) 2017 by netTrek GmbH & Co. KG
 */
import { ICompileProvider, IDocumentService, ILogProvider, ILogService, IModule, IWindowService } from 'angular';
import * as angular from 'angular';
import { bindingModule } from './binding/binding.module';
import IInjectorService = angular.auto.IInjectorService;
import { userModule } from './user/user.module';


export const appModule: IModule   =
                 angular.module( 'app', [
                     'ngSanitize',
                     bindingModule.name,
                     userModule.name
                 ] )
                     .run ( ( author: string,
                              $log: ILogService,
                              $window: IWindowService,
                              $document: IDocumentService ) => {
                         // console.log ( 'app is running', author );
                         $log.log ('Hello World ' );
                         $log.debug ('debug Hello World ' );

                         console.log ( $window === window );

                         // console.log (  );
                         $document.find( 'body' )
                                  .css('backgroundColor', 'gray');

                     })
                     .config ( ( $compileProvider: ICompileProvider,
                                 $logProvider: ILogProvider ) => {

                         // console.log ( 'config app module', $compileProvider);
                         // $compileProvider.debugInfoEnabled( false );
                         $logProvider.debugEnabled( false )
                     })
;