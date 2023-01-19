import { Component, ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'mat-cell-wrapper',
    template: `
        <mat-cell *matCellDef="let element">
            <ng-content select="[cell]"></ng-content>
        </mat-cell>
    `,
    // encapsulation: ViewEncapsulation\.ShadowDom
})
export class MatCellWrapperComponent {
    static CUSTOM_ELM_NAME = 'mat-cell-wrapper';
}
