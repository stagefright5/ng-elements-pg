import { Component, EventEmitter, Input, Output, ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'sf5-input',
    template: `
        <mat-error>
            {{ errorStr }}
            <slot name="error_slot"></slot>
        </mat-error>
    `,
    styles: [],
    encapsulation: ViewEncapsulation.ShadowDom,
})
export class Sf5ErrorComponent {
    static CUSTOM_ELM_NAME = 'sf5-custom-error';
    @Input('showError') showError = false;
    @Input('errorStr') errorStr = '';
}
