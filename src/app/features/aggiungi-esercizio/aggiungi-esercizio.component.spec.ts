import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AggiungiEsercizioComponent } from './aggiungi-esercizio.component';

describe('AggiungiEsercizioComponent', () => {
  let component: AggiungiEsercizioComponent;
  let fixture: ComponentFixture<AggiungiEsercizioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AggiungiEsercizioComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AggiungiEsercizioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
