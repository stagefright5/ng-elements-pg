import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Sf5InputComponent } from './sf5-input.component';

describe('Sf5NgElementsComponent', () => {
  let component: Sf5InputComponent;
  let fixture: ComponentFixture<Sf5InputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Sf5InputComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Sf5InputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
