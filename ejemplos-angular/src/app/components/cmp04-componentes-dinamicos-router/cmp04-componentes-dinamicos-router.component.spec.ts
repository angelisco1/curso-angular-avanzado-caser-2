import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cmp04ComponentesDinamicosRouterComponent } from './cmp04-componentes-dinamicos-router.component';

describe('Cmp04ComponentesDinamicosRouterComponent', () => {
  let component: Cmp04ComponentesDinamicosRouterComponent;
  let fixture: ComponentFixture<Cmp04ComponentesDinamicosRouterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Cmp04ComponentesDinamicosRouterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Cmp04ComponentesDinamicosRouterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
