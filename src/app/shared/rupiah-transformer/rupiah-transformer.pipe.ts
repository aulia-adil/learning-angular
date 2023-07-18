import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'rupiahTransformer'
})
export class RupiahTransformerPipe implements PipeTransform {

  transform(value: number, ...args: unknown[]): unknown {
    // make variable value to string and then every 3 number at the
    // end of the string will be added with a dot at the left most of the number
    // example: 1000000 => 1.000.000
    let result = value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    result = "Rp" + result + ",-";
    return result;
  }

}
