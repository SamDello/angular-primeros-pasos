import { Component, EventEmitter, Input, Output} from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'app-dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
  standalone: false,
})
export class ListComponent {
  @Input()
  public characterList:Character[] = [
    {
      name:'trunks',
      power: 15,
    },
  ];

  // @Output()
  // public onDeleteId:EventEmitter<number> = new EventEmitter();
  //   onDeleteCharacter(index:number){
  //   this.onDeleteId.emit(index);
  // }
  @Output()
  public onDeletedById:EventEmitter<string> = new EventEmitter();

  deletedChById(id?:string){
    if (!id) return;
    console.log({id});
    this.onDeletedById.emit(id);
  }
}
