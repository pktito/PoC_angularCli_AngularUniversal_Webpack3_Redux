var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule, APP_BOOTSTRAP_LISTENER, ApplicationRef } from '@angular/core';
import { ServerModule } from '@angular/platform-server';
import { ServerTransferStateModule } from '../modules/transfer-state/server-transfer-state.module';
import { AppComponent } from './app.component';
import { AppModule } from './app.module';
import { TransferState } from '../modules/transfer-state/transfer-state';
import { BrowserModule } from '@angular/platform-browser';
export function onBootstrap(appRef, transferState) {
    return function () {
        appRef.isStable
            .filter(function (stable) { return stable; })
            .first()
            .subscribe(function () {
            transferState.inject();
        });
    };
}
var ServerAppModule = (function () {
    function ServerAppModule() {
    }
    ServerAppModule = __decorate([
        NgModule({
            bootstrap: [AppComponent],
            imports: [
                BrowserModule.withServerTransition({
                    appId: 'my-app-id'
                }),
                ServerModule,
                ServerTransferStateModule,
                AppModule
            ],
            providers: [
                {
                    provide: APP_BOOTSTRAP_LISTENER,
                    useFactory: onBootstrap,
                    multi: true,
                    deps: [
                        ApplicationRef,
                        TransferState
                    ]
                }
            ]
        })
    ], ServerAppModule);
    return ServerAppModule;
}());
export { ServerAppModule };
