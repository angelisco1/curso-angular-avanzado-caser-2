import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cmp06TraduccionesComponent } from './cmp06-traducciones.component';

describe('Cmp06TraduccionesComponent', () => {
  let component: Cmp06TraduccionesComponent;
  let fixture: ComponentFixture<Cmp06TraduccionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Cmp06TraduccionesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Cmp06TraduccionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
