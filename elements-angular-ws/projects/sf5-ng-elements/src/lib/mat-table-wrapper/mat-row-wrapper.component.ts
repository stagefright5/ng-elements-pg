import { Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'mat-row-wrapper',
    template: `
        <mat-row *matRowDef="let row; columns: displayedColumns">
            <slot name="row"></slot>
        </mat-row>
    `,
    encapsulation: ViewEncapsulation.ShadowDom
})
export class MatRowWrapperComponent {
    static CUSTOM_ELM_NAME = 'mat-row-wrapper';
    @Input('displayedColumns') displayedColumns = [];
}
