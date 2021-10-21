import { Component, OnInit } from '@angular/core';
import {CharactersService} from "./services/characters.service";
import {TextsService} from "./services/texts.service";
import {NumbersService} from "./services/numbers.service";
import {Text} from './interfaces/text';
import {Character} from './interfaces/character';
import {Number} from './interfaces/number';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Platzi Master Reto Apalabrados';
private regexText = /^[A-Za-z0-9\s]+$/g;
private regexChar = /[^a-zA-Z0-9 ]/g;
  constructor(private charactersService:CharactersService, private textService:TextsService, private numbersService:NumbersService) { }
  ngOnInit(): void {

  }

  onSubmit(data:string){

const input = data.trim();

if(input!=""){//If data is not empty

  if(!isNaN(Number(input))){//It is a number
    this.saveNumber(Number(input));
  }else{
//Evaluating if it has special characters
    if(input.match(this.regexText)!=null){
    this.saveText(input);
  }else{
    this.saveCharacter(input);
  }
  }
}else{
  alert('Input is required');
}
}//End onSubmit

 saveNumber(n:number){
  //First

   this.numbersService.saveNumber(n);


  //// TODO save number
  // this.numbersService.saveNumber(n);
}

saveCharacter(text:string){
  //// TODO: SAVE CHARACTER
  let characters=text.match(this.regexChar)||[];
  for(let i=0;i<characters.length;i++){
    let character:Character={
      caracter:characters[i]
    }
    this.charactersService.saveCharacter(character);
  }
}

saveText(t:string){
  //// TODO: SAVE TEXT
  let text:Text =  {
    inicial:t.charAt(0),
    final:t.slice(-1),
    texto:t
  }
  this.textService.saveText(text);
}


}
