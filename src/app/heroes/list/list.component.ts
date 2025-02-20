import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
  standalone: false,
})
export class ListComponent {
  public nameHeroes: string[] = ['spiderman','thor','hulk','iron man'];
  public heroRemove?:string;

  removeLastHero():void{
    this.heroRemove = this.nameHeroes.pop();
  }
}
