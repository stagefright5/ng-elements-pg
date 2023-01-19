import { Component, ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'mat-header-cell-wrapper',
    template: `
        <mat-header-cell *matHeaderCellDef>
            <ng-content select="[header-cell]"></ng-content>
        </mat-header-cell>
    `,
    // encapsulation: ViewEncapsulation\.ShadowDom
})
export class MatHeaderCellWrapperComponent {
    static CUSTOM_ELM_NAME = 'mat-header-cell-wrapper';
}
