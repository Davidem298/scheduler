import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardAllenamentoComponent } from './card-allenamento.component';

describe('CardAllenamentoComponent', () => {
  let component: CardAllenamentoComponent;
  let fixture: ComponentFixture<CardAllenamentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardAllenamentoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardAllenamentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
