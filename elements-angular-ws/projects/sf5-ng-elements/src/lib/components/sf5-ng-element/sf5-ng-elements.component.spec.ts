import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Sf5NgElementsComponent } from './sf5-ng-elements.component';

describe('Sf5NgElementsComponent', () => {
  let component: Sf5NgElementsComponent;
  let fixture: ComponentFixture<Sf5NgElementsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Sf5NgElementsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Sf5NgElementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
