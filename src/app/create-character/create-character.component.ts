import { Component, OnInit } from '@angular/core';
import { StarwarsService } from '../star-wars-service';

@Component({
  selector: 'app-create-character',
  templateUrl: './create-character.component.html',
  styleUrls: ['./create-character.component.css']
})
export class CreateCharacterComponent implements OnInit {
availableSide =[{display: 'None',Value:''},
{display:'Light',Value:'light'},
{display:'Dark',Value:'dark'}
];
swService : StarwarsService
  constructor(swService:StarwarsService) { 
    this.swService = swService;
  }

  ngOnInit() {
  }

  onSubmit(form)
  {
  if (form.invalid)
  return;
    this.swService.addCharacter(form.value.name,form.value.side)
    console.log(form);
  }
}
