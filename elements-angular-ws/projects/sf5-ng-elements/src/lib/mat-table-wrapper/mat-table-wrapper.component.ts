import { Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'mat-table-wrapper',
    template: `
        <mat-table [dataSource]="dataSource">
            <slot name="table"></slot> <!-- This slot DOES NOT get projected -->
            <!-- <ng-content select="ce-mat-header-row-wrapper"></ng-content> -->
            <!-- <ng-content select="ce-mat-row-wrapper"></ng-content>
            <ng-content select="ce-mat-header-row-wrapper"></ng-content>
            <ng-content select="ce-mat-row-wrapper"></ng-content> -->
        </mat-table>
        <h2>
            <slot name="table"></slot> <!-- This slot DOES get projected -->
        </h2>
    `,
    encapsulation: ViewEncapsulation.ShadowDom,
})
export class MatTableWrapperComponent {
    static CUSTOM_ELM_NAME = 'mat-table-wrapper';
    @Input() dataSource = [];
}
