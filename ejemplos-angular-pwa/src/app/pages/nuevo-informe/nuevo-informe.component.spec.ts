import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevoInformeComponent } from './nuevo-informe.component';

describe('NuevoInformeComponent', () => {
  let component: NuevoInformeComponent;
  let fixture: ComponentFixture<NuevoInformeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NuevoInformeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NuevoInformeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
