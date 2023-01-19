import { Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'mat-row-wrapper',
    template: `
        <mat-row *matRowDef="let row; columns: displayedColumns">
            <ng-content select="[row]"></ng-content>
        </mat-row>
    `,
    // encapsulation: ViewEncapsulation\.ShadowDom
})
export class MatRowWrapperComponent {
    static CUSTOM_ELM_NAME = 'mat-row-wrapper';
    @Input('displayedColumns') displayedColumns = [];
}
