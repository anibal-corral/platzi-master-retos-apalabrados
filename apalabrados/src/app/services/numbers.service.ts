import { Injectable } from '@angular/core';
import {Number} from '../interfaces/number';

import {NUMBERS} from '../mocks/mock-numbers';

import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NumbersService {

  constructor() { }

  getNumbers():Observable<Number[]>{
      const numbers = of(NUMBERS);
      return numbers;
  }
}
