import { Injectable } from '@angular/core';
import {Number} from '../interfaces/number';
//improvement opportunity
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/compat/firestore';

import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NumbersService {
private collectionName:string = 'numeros';
  constructor(private firestore:AngularFirestore) { }

  getNumbers():Observable<Number[]>{
  return this.firestore.collection<Number>(this.collectionName).valueChanges();
   }


   saveNumber(n:number){
     //
     var accumulated=0;
// this.firestore.collection(this.collectionName).add(n).then();
this.firestore.collection<Number>(this.collectionName).get().forEach((doc)=>{
  doc.docs.forEach(
    (d)=> {
      accumulated+=d.get('numero');
      // console.log(accumulated)
    }
    // console.log(d.get('numero'))
)
}).then(
  (result)=>{
    this.firestore.collection(this.collectionName).add({numero:n,acumulado:accumulated+n}).then();
  }
);



   }
}
