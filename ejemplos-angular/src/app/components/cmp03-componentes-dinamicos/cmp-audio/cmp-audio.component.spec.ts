import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CmpAudioComponent } from './cmp-audio.component';

describe('CmpAudioComponent', () => {
  let component: CmpAudioComponent;
  let fixture: ComponentFixture<CmpAudioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CmpAudioComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CmpAudioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
