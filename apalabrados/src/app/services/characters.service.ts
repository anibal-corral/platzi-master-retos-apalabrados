import { Injectable } from '@angular/core';
import {Character} from '../interfaces/character';
//improvement opportunity
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/compat/firestore';
import { Observable, of } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CharactersService {

  constructor(private firestore:AngularFirestore) { }


  getCharacters():Observable<Character[]>{
  return this.firestore.collection<Character>('caracteres').valueChanges();
   }
}
