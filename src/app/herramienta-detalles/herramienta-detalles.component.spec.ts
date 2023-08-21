import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HerramientaDetallesComponent } from './herramienta-detalles.component';

describe('HerramientaDetallesComponent', () => {
  let component: HerramientaDetallesComponent;
  let fixture: ComponentFixture<HerramientaDetallesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HerramientaDetallesComponent]
    });
    fixture = TestBed.createComponent(HerramientaDetallesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
