import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    template: `
        <sf5-custom-input
            [value]="v"
            (ngModelChangeEvent)="logIt($event)"
        ></sf5-custom-input>
        <sf5-custom-table [dataSource]="ds"></sf5-custom-table>
    `,
    styleUrls: ['./app.component.scss'],
})
export class AppComponent {
    title = 'ng-custom-element-user-ws';
    ds = ELMENET_DATA;
    v = `Hue ${Math.random()}`;
    logIt(e: any) {
        console.log('ewewe', e);
    }
}

// give me angular table data source with new elements:
const ELMENET_DATA = [
    { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
    { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
    { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
    { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
    { position: 11, name: 'Hue', weight: 20.1797, symbol: 'Hue' },
    { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
    // { position: 12, name: 'Hue', weight: 20.1797, symbol: 'Ne' },
    // { position: 13, name: 'Hue', weight: 20.1797, symbol: 'Ne' },
    // { position: 14, name: 'Hue', weight: 20.1797, symbol: 'Ne' },
    // { position: 15, name: 'Hue', weight: 20.1797, symbol: 'Ne' },
    // { position: 16, name: 'Hue', weight: 20.1797, symbol: 'Ne' },
    // { position: 17, name: 'Hue', weight: 20.1797, symbol: 'Ne' },
    // { position: 18, name: 'Hue', weight: 20.1797, symbol: 'Ne' },
];
