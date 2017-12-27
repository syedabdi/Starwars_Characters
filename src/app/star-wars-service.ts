import {Injectable} from '@angular/core';
import {LogService} from './log.service'

@Injectable()
export class StarwarsService{
private characters = [
    {name: 'Luke Skywalker', side: ''},
    {name: 'Dark Vader', side: ''},
   ];

private logService:LogService;

   constructor(logService : LogService){
     this.logService = logService;
   }
   getCharacters(choosenList) {
    if (choosenList === 'all'){
   return this.characters.slice();
  }
  return this.characters.filter((char) => {
    return char.side === choosenList;
})

}

onSideChosen(charInfo) {
  const pos = this.characters.findIndex((char) => {
    return char.name === charInfo.name;
  })
  this.characters[pos].side = charInfo.side;
 this.logService.writeLog('Changed side of ' + charInfo.name + ', new side: ' + charInfo.side);
}

addCharacter(name, side)
{
  const pos = this.characters.findIndex((char)=>
  {
    return char.name ===name;
  }
  )
  if(pos !==-1){
    return;
  }

const newChar = {name:name, side:side};
this.characters.push(newChar);

}

}

