import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import {v4 as uuid} from 'uuid';

@Injectable({providedIn: 'root'})
export class DbzService {
  public characters:Character[] = [
    {
      id: uuid(),
      name:'goku',
      power: 10000
    },
    {
      id: uuid(),
      name:'krillin',
      power: 505
    },
    {
      id: uuid(),
      name:'picolo',
      power:500
    }
  ];
  addCharacter(character:Character):void{
    const newCharacter:Character ={
      id: uuid(), ...character
    }
    this.characters.push(newCharacter);
  }

  // onDeletedC(index:number){
  //   this.characters.splice(index,1);
  // }
  deletedCharacterById(id:string){
    this.characters = this.characters.filter(character=>character.id !== id);
  }

}
