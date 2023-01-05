import { Component, ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'sample-content',
    template: `
        <mat-table>
            <slot name="con"></slot>
        </mat-table>
        <!-- <slot name="con"></slot> -->
    `,
    styles: [],
    encapsulation: ViewEncapsulation.ShadowDom,
})
export class SampleComponent {
    // static CUSTOM_ELM_NAME = "sample";
}
