import { Component, OnInit , Input } from '@angular/core';
import {StarwarsService} from '../star-wars-service'

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css'],

})
export class ItemComponent implements OnInit {
@Input() character;
//@Output() sideAssigned = new EventEmitter<{name: string, side: string}>();

swService:StarwarsService;
  constructor(swService: StarwarsService ) { 

    this.swService = swService;
  }

  ngOnInit() {
  }

  onAssign(side) {
  this.swService.onSideChosen({name: this.character.name, side: side});
   //this.character.side = side;
  // this.sideAssigned.emit({name: this.character.name, side: side});
  }
}
