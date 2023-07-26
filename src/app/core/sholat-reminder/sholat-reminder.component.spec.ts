import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SholatReminderComponent } from './sholat-reminder.component';

describe('SholatReminderComponent', () => {
  let component: SholatReminderComponent;
  let fixture: ComponentFixture<SholatReminderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SholatReminderComponent]
    });
    fixture = TestBed.createComponent(SholatReminderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
