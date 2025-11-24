import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CmpImagenComponent } from './cmp-imagen.component';

describe('CmpImagenComponent', () => {
  let component: CmpImagenComponent;
  let fixture: ComponentFixture<CmpImagenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CmpImagenComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CmpImagenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
