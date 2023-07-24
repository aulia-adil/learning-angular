import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainComponent } from './main.component';
import {HttpClientModule} from "@angular/common/http";

describe('MainComponent', () => {
  let component: MainComponent;
  let fixture: ComponentFixture<MainComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MainComponent],
      imports: [HttpClientModule],
    });
    fixture = TestBed.createComponent(MainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });

  // Hit google search with "jadwal sholat"
  it('should have title', async () => {
    // expect(component).toBeTruthy();
    const tes = component.getJadwalSholatGoogle();
    expect(tes).toEqual("")
  });
});
