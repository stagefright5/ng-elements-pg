import { NgModule } from '@angular/core';
import { MatHeaderCellWrapperComponent } from './mat-header-cell-wrapper.component';
import { MatHeaderRowWrapperComponent } from './mat-header-row-wrapper.component';
import { MatCellWrapperComponent } from './mat-cell-wrapper.component';
import { MatRowWrapperComponent } from './mat-row-wrapper.component';
import { MatTableModule } from '@angular/material/table';
import { MatTableWrapperComponent } from './mat-table-wrapper.component';
const components = [
    MatTableWrapperComponent,
    MatRowWrapperComponent,
    MatCellWrapperComponent,
    MatHeaderCellWrapperComponent,
    MatHeaderRowWrapperComponent,
];
@NgModule({
    declarations: components,
    imports: [MatTableModule],
    exports: components,
})
export class MatTableWrapperModule {}
