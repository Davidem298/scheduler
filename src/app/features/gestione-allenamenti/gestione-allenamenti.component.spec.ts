import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AggiungiAllenamentoComponent } from './gestione-allenament.component';

describe('AggiungiAllenamentoComponent', () => {
  let component: AggiungiAllenamentoComponent;
  let fixture: ComponentFixture<AggiungiAllenamentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AggiungiAllenamentoComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AggiungiAllenamentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
