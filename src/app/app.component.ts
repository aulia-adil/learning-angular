import { Component } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  myForm!: FormGroup;
  result: string = '';

  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {
    this.myForm = this.fb.group({
      value: '',
    });
  }

  /**
   * Create fun() where if the user press enter key, it will console log the value
   */
  fun(e: any) {
    // if e target value is number, then console log "number"
    // else if e target value is string, then console log "string"
    // else console log "other"


    if (isNumeric(e.target.value)) {
      this.result = 'number';
    } else if (typeof e.target.value === 'string' && e.target.value !== '') {
      this.result = 'string';
    } else {
      this.result = 'other';
    }
  }
}

function isNumeric(value: string) {
  return /^-?\d+$/.test(value);
}
