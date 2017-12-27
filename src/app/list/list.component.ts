import { Component, OnInit, Input } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { StarwarsService } from '../star-wars-service';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  characters =[];
  activatedRoute:ActivatedRoute;
  swService :StarwarsService;
   constructor(activatedRoute:ActivatedRoute,
    swService :StarwarsService) {
     this.activatedRoute = activatedRoute;
     this.swService = swService;
    }

  ngOnInit() {
  this.activatedRoute.params.subscribe(
    (params) => {
     this.characters = this.swService.getCharacters(params.side)
    }
  )
  }
 
}
