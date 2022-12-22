import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Sf5NgElementsModule } from 'sf5-ng-elements';

const routes: Routes = [];

@NgModule({
    imports: [RouterModule.forRoot(routes), Sf5NgElementsModule],
    exports: [RouterModule],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppRoutingModule {}
