import { Component, EventEmitter, Input, Output, ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'sf5-input',
    template: `
        <!-- <mat-form-field appearance="fill">
            <mat-label>
                S_label
                <slot name="input_label_slot"></slot>
                <ng-content></ng-content>
            </mat-label>
            <input matInput [ngModel]="value" (ngModelChange)="changed($event)" />
        </mat-form-field>
        <mat-error>
            s_error
            <slot name="input_error_slot"></slot>
        </mat-error> -->
        <mat-form-field appearance="fill">
            <mat-label>
                <ng-content select="[input_label_slot]"></ng-content>
            </mat-label>
            <input [required]="required" matInput [ngModel]="value" (ngModelChange)="changed($event)" />
            <mat-error>
                <ng-content select="[input_error_slot]"></ng-content>
            </mat-error>
        </mat-form-field>
        <!-- <slot name="input_label_slot"></slot> -->
        <!-- <slot name="input_error_slot"></slot> -->
    `,
    styles: [],
    // encapsulation: ViewEncapsulation.ShadowDom,
})
export class Sf5InputComponent {
    static CUSTOM_ELM_NAME = 'sf5-custom-input';
    @Input('value') value = '';
    @Input('required') required = false;
    @Output() ngModelChangeEvent = new EventEmitter();

    changed(e: any) {
        console.log('e', e);
        this.ngModelChangeEvent.emit(e);
    }
}
