import {
    ApplicationRef,
    CUSTOM_ELEMENTS_SCHEMA,
    DoBootstrap,
    Injector,
    NgModule,
} from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { BrowserModule } from '@angular/platform-browser';
import { Sf5NgElementsComponent, Sf5NgElementsModule } from 'sf5-ng-elements';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
    declarations: [],
    imports: [BrowserModule, AppRoutingModule, Sf5NgElementsModule],
    providers: [],
    bootstrap: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule implements DoBootstrap {
    constructor(private injector: Injector) {}

    ngDoBootstrap(appRef: ApplicationRef): void {
        const customWebElm = createCustomElement(Sf5NgElementsComponent, {
            injector: this.injector,
        });
        customElements.define('sf51-custom-elm', customWebElm);
    }
}
