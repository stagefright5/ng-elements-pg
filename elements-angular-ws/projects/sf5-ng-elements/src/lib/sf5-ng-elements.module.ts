import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Sf5InputComponent } from './components/sf5-ng-element/sf5-input.component';
import { Sf5TableComponent } from './components/sf5-ng-element/sf5-table.component';
@NgModule({
    declarations: [Sf5InputComponent, Sf5TableComponent],
    imports: [
        MatInputModule,
        FormsModule,
        BrowserAnimationsModule,
        MatTableModule,
    ],
    exports: [Sf5InputComponent, Sf5TableComponent],
})
export class Sf5NgElementsModule {}
