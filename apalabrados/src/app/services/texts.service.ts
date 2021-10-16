import { Injectable } from '@angular/core';
import {Text} from '../interfaces/text';
//improvement opportunity
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/compat/firestore';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TextsService {
private collectionName:string='texto';
  constructor(private firestore:AngularFirestore) { }


  getTexts():Observable<Text[]>{
  return this.firestore.collection<Text>(this.collectionName).valueChanges();
   }
   saveText(t:Text){
      this.firestore.collection(this.collectionName).add(t).then();//I dont want to do anything so far.
   }
}
