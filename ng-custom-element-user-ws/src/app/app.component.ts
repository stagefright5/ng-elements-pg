import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent {
    title = 'ng-custom-element-user-ws';

    v = "Hue" + Math.random();
    logIt(e: any) {
        console.log('ewewe', e);
    }
}
