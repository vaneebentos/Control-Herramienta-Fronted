import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroHerramientasComponent } from './registro-herramientas.component';

describe('RegistroHerramientasComponent', () => {
  let component: RegistroHerramientasComponent;
  let fixture: ComponentFixture<RegistroHerramientasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegistroHerramientasComponent]
    });
    fixture = TestBed.createComponent(RegistroHerramientasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
