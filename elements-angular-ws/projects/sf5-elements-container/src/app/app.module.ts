import { ApplicationRef, DoBootstrap, Injector, NgModule } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { BrowserModule } from '@angular/platform-browser';
import {
    Sf5InputComponent,
    Sf5TableComponent,
    Sf5NgElementsModule,
} from 'sf5-ng-elements';
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
        const comps = [Sf5InputComponent, Sf5TableComponent];
        for (const com of comps) {
            const customWebElm = createCustomElement(com, {
                injector: this.injector,
            });
            customElements.define(com.CUSTOM_ELM_NAME, customWebElm);
        }
    }
}
