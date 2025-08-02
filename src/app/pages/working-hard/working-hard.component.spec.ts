import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkingHardComponent } from './working-hard.component';

describe('WorkingHardComponent', () => {
  let component: WorkingHardComponent;
  let fixture: ComponentFixture<WorkingHardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WorkingHardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WorkingHardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
