import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAllenamentiEserciziComponent } from './add-allenamenti-esercizi.component';

describe('AddAllenamentiEserciziComponent', () => {
  let component: AddAllenamentiEserciziComponent;
  let fixture: ComponentFixture<AddAllenamentiEserciziComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddAllenamentiEserciziComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddAllenamentiEserciziComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
