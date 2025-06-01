import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestioneEserciziComponent } from './gestione-esercizio.component';

describe('AggiungiEsercizioComponent', () => {
  let component: GestioneEserciziComponent;
  let fixture: ComponentFixture<GestioneEserciziComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GestioneEserciziComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(GestioneEserciziComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
