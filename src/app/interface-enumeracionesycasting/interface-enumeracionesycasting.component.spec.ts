import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterfaceEnumeracionesycastingComponent } from './interface-enumeracionesycasting.component';

describe('InterfaceEnumeracionesycastingComponent', () => {
  let component: InterfaceEnumeracionesycastingComponent;
  let fixture: ComponentFixture<InterfaceEnumeracionesycastingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InterfaceEnumeracionesycastingComponent]
    });
    fixture = TestBed.createComponent(InterfaceEnumeracionesycastingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
