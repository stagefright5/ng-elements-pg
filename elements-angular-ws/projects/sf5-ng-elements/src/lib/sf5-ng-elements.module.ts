import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Sf5InputComponent } from './components/sf5-ng-element/sf5-input.component';
@NgModule({
    declarations: [Sf5InputComponent],
    imports: [MatInputModule, FormsModule, BrowserAnimationsModule],
    exports: [Sf5InputComponent],
})
export class Sf5NgElementsModule {}
