import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaHerramientasComponent } from './lista-herramientas.component';

describe('ListaHerramientasComponent', () => {
  let component: ListaHerramientasComponent;
  let fixture: ComponentFixture<ListaHerramientasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListaHerramientasComponent]
    });
    fixture = TestBed.createComponent(ListaHerramientasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
