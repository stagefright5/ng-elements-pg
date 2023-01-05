import { ApplicationRef, DoBootstrap, Injector, NgModule } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { BrowserModule } from '@angular/platform-browser';
import { components } from 'sf5-ng-elements';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
    declarations: [],
    imports: [BrowserModule, AppRoutingModule],
    providers: [],
    bootstrap: [],
    schemas: [],
})
export class AppModule implements DoBootstrap {
    constructor(private injector: Injector) {}
    // private _customElmNames = new Map<any, string>([
    //     [Sf5InputComponent, 'sf5input-component'],
    //     [Sf5TableComponent, 'sf5table-component'],
    //     [MTB.MatFooterRow, 'mat-footer-row'],
    //     [MTB.MatHeaderRow, 'mat-header-row'],
    //     [MTB.MatRow, 'mat-row'],
    //     [MTB.MatTable, 'mat-table'],
    //     [MTB.MatTextColumn, 'mat-text-column'],
    // ]);
    ngDoBootstrap(appRef: ApplicationRef): void {
        console.log('v1.2.1');
        // const comps = [Sf5InputComponent, Sf5TableComponent].concat(this._getComponentsFromModule(MTB));
        // console.log(
        //     `new Map([${comps.reduce((code, c) => (code += `[${c.name}, "${titleCaseToKebabCase(c.name)}"],`), '')}])`
        // );
        this._registerComponents();
    }

    // private _getComponentsFromModule(module: any) {
    //    return Object.keys(module)
    //        .map((key) => module[key])
    //        .filter((com) => com.decorators?.find((d: any) => d.type.prototype.ngMetadataName === 'Component'));
    //    .forEach((com) => {
    //        const customWebElm = createCustomElement(com, {
    //            injector: this.injector,
    //        });
    //        customElements.define(com.CUSTOM_ELM_NAME, customWebElm);
    //    });
    // }

    private _registerComponents() {
        // this._customElmNames
        for (const comp of Object.values(components)) {
            const customWebElm = createCustomElement(comp, {
                injector: this.injector,
            });
            customElements.define(`ce-${comp.CUSTOM_ELM_NAME}`, customWebElm);
            console.log(`ce-${comp.CUSTOM_ELM_NAME} registered`);
        }
    }
}

// const titleCaseToKebabCase = (str: string) => {
//     return str.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
// };
