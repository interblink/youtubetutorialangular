import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtributosEventosNgmodelComponent } from './atributos-eventos-ngmodel.component';

describe('AtributosEventosNgmodelComponent', () => {
  let component: AtributosEventosNgmodelComponent;
  let fixture: ComponentFixture<AtributosEventosNgmodelComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AtributosEventosNgmodelComponent]
    });
    fixture = TestBed.createComponent(AtributosEventosNgmodelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
