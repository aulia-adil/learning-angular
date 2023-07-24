import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  getData() {
    return [['1', 'a'], ['2', 'b'], ['3', 'c']]
  }
}
