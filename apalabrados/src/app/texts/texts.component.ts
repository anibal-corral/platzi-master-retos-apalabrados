import { Component, OnInit } from '@angular/core';
import {Text} from "../interfaces/text"
@Component({
  selector: 'app-texts',
  templateUrl: './texts.component.html',
  styleUrls: ['./texts.component.css']
})
export class TextsComponent implements OnInit {
texts = Array<Text>();
  constructor() {
    for(let i=1;i<10;i++ )
    {

      this.texts.push({texto:`Palabra ${i}`, inicial:'P', final:`${i}`});
    }
  }

  ngOnInit(): void {
  }

}
