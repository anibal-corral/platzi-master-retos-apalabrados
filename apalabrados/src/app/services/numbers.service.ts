import { Injectable } from '@angular/core';
import {Number} from '../interfaces/number';
//improvement opportunity
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/compat/firestore';

import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NumbersService {
  numbers =this.firestore.collection<Number>('numeros').valueChanges();
  constructor(private firestore:AngularFirestore) { }

  getNumbers():Observable<Number[]>{
  return this.numbers;
   }

   saveNumber(n:number):void{
     //
console.log('Number saved');
console.log(this.numbers);
   }
}
