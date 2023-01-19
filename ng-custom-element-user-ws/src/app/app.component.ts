import { Component, ElementRef } from '@angular/core';

@Component({
    selector: 'app-root',
    template: `
        <!-- <mat-form-field appearance="fill">
            <mat-label> Here is the label </mat-label>
            <input matInput />
        </mat-form-field>
        <mat-error> Here is the error </mat-error> -->
        <ce-mat-table-wrapper [dataSource]="dataSource" class="mat-elevation-z8">
            <!--- Note that these columns can be defined in any order.
      The actual rendered columns are set as a property on the row definition" -->
            <ng-container table>
                <!-- Position Column -->
                <ng-container matColumnDef="position">
                    <th mat-header-cell *matHeaderCellDef>No.</th>
                    <td mat-cell *matCellDef="let element">{{ element.position }}</td>
                </ng-container>

                <!-- Name Column -->
                <ng-container matColumnDef="name">
                    <th mat-header-cell *matHeaderCellDef>Name</th>
                    <td mat-cell *matCellDef="let element">{{ element.name }}</td>
                </ng-container>

                <!-- Weight Column -->
                <ng-container matColumnDef="weight">
                    <th mat-header-cell *matHeaderCellDef>Weight</th>
                    <td mat-cell *matCellDef="let element">{{ element.weight }}</td>
                </ng-container>

                <!-- Symbol Column -->
                <ng-container matColumnDef="symbol">
                    <th mat-header-cell *matHeaderCellDef>Symbol</th>
                    <td mat-cell *matCellDef="let element">{{ element.symbol }}</td>
                </ng-container>

                <tr mat-header-row *matHeaderRowDef="displayedColumns"></tr>
                <tr mat-row *matRowDef="let row; columns: displayedColumns"></tr>
            </ng-container>
        </ce-mat-table-wrapper>
    `,
    styleUrls: ['./app.component.scss'],
})
export class AppComponent {
    title = 'ng-custom-element-user-ws';
    dataSource = ELMENET_DATA;
    displayedColumns = ['position', 'name', 'weight', 'symbol'];
    v = `Hue ${Math.random()}`;

    constructor(private _elRef: ElementRef) {}
    logIt(e: any) {
        console.log('ewewe', e);
    }

    ngAfterViewInit() {
        // <ce-sf5-custom-input value="${`Hue ${Math.random()}`}">
        //     <span slot="input_label_slot">Hi</span>
        //     <span slot="input_error_slot">Error</span>
        // </ce-sf5-custom-input>
        const elm = document.createElement('div');
        elm.innerHTML = `
        <ce-sf5-custom-input value="${`Hue ${Math.random()}`}" required="true">
            <ng-container input_label_slot>Hi</ng-container>
            <ng-container input_error_slot>Error</ng-container>
            <ng-container input_error_slot>Error</ng-container>
            <ng-container input_error_slot>Error</ng-container>
            <ng-container input_error_slot>Error</ng-container>
            <ng-container input_error_slot>Error</ng-container>
            <ng-container input_error_slot>Error</ng-container>
            <ng-container input_error_slot>Error</ng-container>
        </ce-sf5-custom-input>
        `;
        (this._elRef.nativeElement as HTMLElement).appendChild(elm);
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
