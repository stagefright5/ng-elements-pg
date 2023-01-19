import { Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'mat-header-row-wrapper',
    template: `
        <mat-header-row *matHeaderRowDef="displayedColumns">
            <ng-content select="[header-row]"></ng-content>
        </mat-header-row>
    `,
    // encapsulation: ViewEncapsulation\.ShadowDom
})
export class MatHeaderRowWrapperComponent {
    static CUSTOM_ELM_NAME = 'mat-header-row-wrapper';
    @Input() displayedColumns = [];
}
