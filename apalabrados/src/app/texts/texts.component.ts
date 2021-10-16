import { Component, OnInit } from '@angular/core';
import {Text} from "../interfaces/text"
import {TextsService} from "../services/texts.service";

@Component({
  selector: 'app-texts',
  templateUrl: './texts.component.html',
  styleUrls: ['./texts.component.css']
})
export class TextsComponent implements OnInit {
texts:Text[]=[];
  constructor(private textsService:TextsService) {  }

  ngOnInit(): void {
    this.getTexts();
  }

  getTexts():void{
    this.textsService.getTexts().subscribe(result =>this.texts=result);
  }

}
