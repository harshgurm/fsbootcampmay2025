import { Component, EventEmitter, Input, Output, SimpleChanges } from '@angular/core';
import { Home } from '../home';

@Component({
  selector: 'app-house-details',
  imports: [],
  templateUrl: './house-details.html',
  styleUrl: './house-details.css'
})
export class HouseDetails {
  @Input() all_houses!: Home[];
  @Input() house_description = '';
  @Output() newEvent = new EventEmitter<string>();

  constructor(){
    // console.log(this.house_description) //doesn't display a value
    // this.house_description = "I am overwriting this value here!!!!!!"; // the value is not getting updated
  }

  ngOnInit(){
    // console.log(this.house_description) // yes it displays the value
    // this.house_description = "I am overwriting this value here!!!!!!";// the value is updated here
  }
  
  ngOnChanges(changes: SimpleChanges){
    console.log(changes['house_description']);
  }

  submitVal(value:string){
    if(value){
      this.newEvent.emit(value);
    }
  }

}
