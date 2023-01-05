import { Component, ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'mat-header-cell-wrapper',
    template: `
        <mat-header-cell *matHeaderCellDef>
            <slot name="header-cell"></slot>
        </mat-header-cell>
    `,
    encapsulation: ViewEncapsulation.ShadowDom
})
export class MatHeaderCellWrapperComponent {
    static CUSTOM_ELM_NAME = 'mat-header-cell-wrapper';
}
