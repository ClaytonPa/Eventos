import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndiceCategoriasComponent } from './indice-categorias.component';

describe('IndiceCategoriasComponent', () => {
  let component: IndiceCategoriasComponent;
  let fixture: ComponentFixture<IndiceCategoriasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndiceCategoriasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IndiceCategoriasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
