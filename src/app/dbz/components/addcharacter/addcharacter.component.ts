import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'app-dbz-addcharacter',
  templateUrl: './addcharacter.component.html',
  styleUrls: ['./addcharacter.component.css'],
  standalone:false,
})
export class AddcharacterComponent {

  @Output()
  public oneNewCharacters: EventEmitter<Character> = new EventEmitter();

  public addCharacter: Character = {
    name:'',
    power:0
  };
  emitCharacter():void{
    console.log(this.addCharacter);
    if (this.addCharacter.name.length===0) return;

    this.oneNewCharacters.emit(this.addCharacter);

    this.addCharacter = {name:'',power:0}
  }
}
