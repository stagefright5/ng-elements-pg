import { Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'mat-table-wrapper',
    template: `
        <mat-table [dataSource]="dataSource">
            <ng-content select="[table]"></ng-content>
            <!-- <ng-content select="[header-row-wrapper]"></ng-content>
            <ng-content select="[row-wrapper]"></ng-content>
            <ng-content select="[header-cell-wrapper]"></ng-content>
            <ng-content select="[row-wrapper]"></ng-content> -->
        </mat-table>
        <h2>
            <ng-content select="[table]"></ng-content> <!-- This slot DOES get projected -->
        </h2>
    `,
    // encapsulation: ViewEncapsulation\.ShadowDom,
})
export class MatTableWrapperComponent {
    static CUSTOM_ELM_NAME = 'mat-table-wrapper';
    @Input() dataSource = [];
}
