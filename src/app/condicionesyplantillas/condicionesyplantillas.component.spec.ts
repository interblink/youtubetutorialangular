import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CondicionesyplantillasComponent } from './condicionesyplantillas.component';

describe('CondicionesyplantillasComponent', () => {
  let component: CondicionesyplantillasComponent;
  let fixture: ComponentFixture<CondicionesyplantillasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CondicionesyplantillasComponent]
    });
    fixture = TestBed.createComponent(CondicionesyplantillasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
