import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
    selector: 'sf5-input',
    template: `
        <mat-form-field>
            <input
                matInput
                [ngModel]="value"
                (ngModelChange)="changed($event)"
            />
        </mat-form-field>
    `,
    styles: [],
})
export class Sf5InputComponent {
    static CUSTOM_ELM_NAME = 'sf5-custom-input';
    @Input('value') value = '';
    @Output() ngModelChangeEvent = new EventEmitter();

    changed(e: any) {
        console.log('e', e);
        this.ngModelChangeEvent.emit(e);
    }
}
