import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestioneCircuitiComponent } from './gestione-circuiti.component';

describe('AddAllenamentiEserciziComponent', () => {
  let component: GestioneCircuitiComponent;
  let fixture: ComponentFixture<GestioneCircuitiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GestioneCircuitiComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(GestioneCircuitiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
