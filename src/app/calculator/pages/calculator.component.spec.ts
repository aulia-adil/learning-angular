import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculatorComponent } from './calculator.component';
import {CommonModule} from "@angular/common";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatButtonModule} from "@angular/material/button";
import {BrowserModule} from "@angular/platform-browser";
import {AppRoutingModule} from "../../app-routing.module";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";


describe('CalculatorComponent', () => {
  let component: CalculatorComponent;
  let fixture: ComponentFixture<CalculatorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CalculatorComponent],
      imports: [
        CommonModule,
        MatFormFieldModule,
        MatInputModule,
        FormsModule,
        ReactiveFormsModule,
        MatButtonModule,
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
      ]
    });
    fixture = TestBed.createComponent(CalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  /**
   * Test findRightMostNumber
   */
  it('should return 0 when input is 0', () => {
    const result = component.findRightMostNumber('0');
    expect(result).toEqual(0);
  });

  it('should return 1 when input is 1', () => {
    const result = component.findRightMostNumber('1');
    expect(result).toEqual(1);
  });

  it('should return 1 when input is 1+1312', () => {
    const result = component.findRightMostNumber('13213+1312');
    expect(result).toEqual(1312);
  });

  it('should return 1 when input is 1+1312-4312368', () => {
    const result = component.findRightMostNumber('1+1312+4312368');
    expect(result).toEqual(4312368);
  });

  it('should return 1 when input is 1+1312-4312368*123', () => {
    const result = component.findRightMostNumber('1+1312-4312368*123');
    expect(result).toEqual(123);
  });

  it('should return 1 when input is 1+1312-4312368*123/123', () => {
    const result = component.findRightMostNumber('1+1312-4312368*123/123');
    expect(result).toEqual(123);
  });

  /**
   * Test findLeftMostNumber
   */
  it('should return 0 when input is 0', () => {
    const result = component.findLeftMostNumber('0');
    expect(result).toEqual(0);
      })

  it('should return 1 when input is 1', () => {
    const result = component.findLeftMostNumber('1');
    expect(result).toEqual(1);
  });

  it('should return 1 when input is 1+1312', () => {
    const result = component.findLeftMostNumber('13+1312');
    expect(result).toEqual(13);
  })

  it('should return 1 when input is 4234+1312-4312368', () => {
    const result = component.findLeftMostNumber('4234+1312-4312368');
    expect(result).toEqual(4234);
  });

  it('should return 1 when input is 1+1312-4312368*123', () => {
    const result = component.findLeftMostNumber('1+1312-4312368*123');
    expect(result).toEqual(1);
  });

  /**
   * Test calculate
   */
  it('should return 20 when input is 10/10', () => {
    const result = component.calculate('10/10');
    expect(result).toEqual("1");
  });
});
