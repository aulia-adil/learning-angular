import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardNoteComponent } from './card-note.component';

describe('CardNoteComponent', () => {
  let component: CardNoteComponent;
  let fixture: ComponentFixture<CardNoteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardNoteComponent]
    });
    fixture = TestBed.createComponent(CardNoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
