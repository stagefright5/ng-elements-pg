import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    template: `
        <sf51-custom-elm
            [value]="v"
            (ngModelChangeEvent)="logIt($event)"
        ></sf51-custom-elm>
    `,
    styleUrls: ['./app.component.scss'],
})
export class AppComponent {
    title = 'ng-custom-element-user-ws';

    v = `Hue ${Math.random()}`;
    logIt(e: any) {
        console.log('ewewe', e);
    }
}
