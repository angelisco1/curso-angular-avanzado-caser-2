import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cmp05LazyLoadingComponent } from './cmp05-lazy-loading.component';

describe('Cmp05LazyLoadingComponent', () => {
  let component: Cmp05LazyLoadingComponent;
  let fixture: ComponentFixture<Cmp05LazyLoadingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Cmp05LazyLoadingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Cmp05LazyLoadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
