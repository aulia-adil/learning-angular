import {Component} from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-pages',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.sass']
})
export class CalculatorComponent {
  numberString = new FormControl('');

  /**
   * Compute for creating a calculator where there is
   * only addition, substraction, multiplication and division
   */
  submitForm() {
    const value = this.numberString.getRawValue();
    const result = this.calculate(value || '');
    this.numberString.setValue(result);
  }

  /**
   * Calculate the process
   */
  calculate(value: string): string {
    const operators = ['+', '-', '*', '/'];
    let operator = '';
    operators.forEach((op) => {
      if (value?.includes(op)) {
        operator = op;
      }
    })
    const listValue = value?.split(operator);
    const rightMostNumber = this.findRightMostNumber(listValue?.[1] || '');
    const leftMostNumber = this.findLeftMostNumber(listValue?.[0] || '');
    let result = 0;
    switch (operator) {
      case '+':
        result = leftMostNumber + rightMostNumber;
        break;
      case '-':
        result = leftMostNumber - rightMostNumber;
        break;
      case '*':
        result = leftMostNumber * rightMostNumber;
        break;
      case '/':
        result = leftMostNumber / rightMostNumber;
        break;
    }
    return result.toString();
  }

  /**
   * The input is a string of numbers and operators
   * the right most characters are a number
   *
   * Find this right most characters which is a number
   * until it reaches an operator
   *
   * @input: string
   * @return: number
   */
  findRightMostNumber(input: string): number {
    let number = '';
    for (let i = input.length - 1; i >= 0; i--) {
      const character = input[i];
      if (character === '+' || character === '-' || character === '*' || character === '/') {
        break;
      }
      number = character + number;
    }
    return parseInt(number);
  }

  findLeftMostNumber(input: string): number {
    let number = '';
    for (let i = 0; i < input.length; i++) {
      const character = input[i];
      if (character === '+' || character === '-' || character === '*' || character === '/') {
        break;
      }
      number = number + character;
    }
    return parseInt(number);
  }
}
