import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cmp07SignalsComponent } from './cmp07-signals.component';

describe('Cmp07SignalsComponent', () => {
  let component: Cmp07SignalsComponent;
  let fixture: ComponentFixture<Cmp07SignalsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Cmp07SignalsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Cmp07SignalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
