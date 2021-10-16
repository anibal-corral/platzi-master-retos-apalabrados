import { Injectable } from '@angular/core';
import {Text} from '../interfaces/text';
//improvement opportunity
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/compat/firestore';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TextsService {

  constructor(private firestore:AngularFirestore) { }


  getTexts():Observable<Text[]>{
  return this.firestore.collection<Text>('texto').valueChanges();
   }
}
