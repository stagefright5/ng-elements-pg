import { ApplicationRef, DoBootstrap, Injector, NgModule } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { BrowserModule } from '@angular/platform-browser';
import { Sf5InputComponent, Sf5NgElementsModule } from 'sf5-ng-elements';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
    declarations: [],
    imports: [BrowserModule, AppRoutingModule, Sf5NgElementsModule],
    providers: [],
    bootstrap: [],
    schemas: [],
})
export class AppModule implements DoBootstrap {
    constructor(private injector: Injector) {}

    ngDoBootstrap(appRef: ApplicationRef): void {
        const customWebElm = createCustomElement(Sf5InputComponent, {
            injector: this.injector,
        });
        customElements.define('sf51-custom-elm', customWebElm);
    }
}
