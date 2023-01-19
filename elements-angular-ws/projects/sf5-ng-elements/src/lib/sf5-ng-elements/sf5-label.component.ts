import { Component, EventEmitter, Input, Output, ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'sf5-input',
    template: `
        <mat-label>
            {{ label }}
            <slot name="label_slot"></slot>
        </mat-label>
    `,
    styles: [],
    encapsulation: ViewEncapsulation.ShadowDom,
})
export class Sf5LabelComponent {
    static CUSTOM_ELM_NAME = 'sf5-custom-label';
    // @Input('showError') showError = false;
    // @Input('errorStr') errorStr = '';
    @Input('label') label = '';
}
