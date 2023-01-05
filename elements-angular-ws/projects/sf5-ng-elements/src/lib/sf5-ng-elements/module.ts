import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Sf5InputComponent } from './sf5-input.component';
import { Sf5TableComponent } from './sf5-table.component';
const components = [Sf5InputComponent, Sf5TableComponent];
@NgModule({
    declarations: components,
    imports: [MatInputModule, FormsModule, BrowserAnimationsModule, MatTableModule],
    exports: components,
})
export class Sf5NgElementsModule {}
