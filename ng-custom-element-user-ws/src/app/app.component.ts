import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    template: `
        <ce-sf5-custom-input [value]="v" (ngModelChangeEvent)="logIt($event)"></ce-sf5-custom-input>
        <!-- <ce-sf5-custom-table [dataSource]="ds"></ce-sf5-custom-table> -->
        <ce-mat-table-wrapper [dataSource]="dataSource">
            <h1 slot="table">Sample Content</h1>
        </ce-mat-table-wrapper>
        <sample-content>
            <h1 slot="con">Sample Content</h1>
        </sample-content>
    `,
    styleUrls: ['./app.component.scss'],
})
export class AppComponent {
    title = 'ng-custom-element-user-ws';
    dataSource = ELMENET_DATA;
    displayedColumns = ['position', 'name', 'weight', 'symbol'];
    v = `Hue ${Math.random()}`;
    logIt(e: any) {
        console.log('ewewe', e);
    }
}

// give me angular table data source with new elements:
const ELMENET_DATA = [
    { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
    { position: 13, name: 'Hue', weight: 20.1797, symbol: 'Ne' },
    { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
    { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
    { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
    { position: 14, name: 'Hue', weight: 20.1797, symbol: 'Ne' },
    { position: 11, name: 'Hue', weight: 20.1797, symbol: 'Hue' },
    { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
    { position: 15, name: 'Hue', weight: 20.1797, symbol: 'Ne' },
    // { position: 12, name: 'Hue', weight: 20.1797, symbol: 'Ne' },
    // { position: 16, name: 'Hue', weight: 20.1797, symbol: 'Ne' },
    // { position: 17, name: 'Hue', weight: 20.1797, symbol: 'Ne' },
    // { position: 18, name: 'Hue', weight: 20.1797, symbol: 'Ne' },
];
