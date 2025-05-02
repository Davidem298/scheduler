import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhDashboardComponent } from './wh-dashboard.component';

describe('WhDashboardComponent', () => {
  let component: WhDashboardComponent;
  let fixture: ComponentFixture<WhDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WhDashboardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WhDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
