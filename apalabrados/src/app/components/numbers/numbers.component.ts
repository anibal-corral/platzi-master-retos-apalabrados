import { Component, OnInit } from '@angular/core';
import {Number}from "../../interfaces/number";
import {NumbersService} from "../../services/numbers.service";
@Component({
  selector: 'app-numbers',
  templateUrl: './numbers.component.html',
  styleUrls: ['./numbers.component.css']
})
export class NumbersComponent implements OnInit {
numbers: Number[]=[];

  constructor(private numberService:NumbersService) {}

  ngOnInit(): void {
    this.getNumbers();

  }
  getNumbers():void{
    this.numberService.getNumbers().subscribe(result => this.numbers=result);
  }

  

}
