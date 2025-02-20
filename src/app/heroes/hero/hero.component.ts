import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css'],
  standalone: false,
})
export class HeroComponent {
  public name: string = 'iron Man';
  public age:  number = 45;

  get capitalizedName():string{
    return this.name.toUpperCase();
  }

  getHeroDescription():string{
    return `${this.name} - ${this.age}`;
  }

  changeHero():void{
    this.name = 'Hulk';
  }
  changeAge():void{
    this.age = 40;
  }

  reset():void{
    this.name = 'iron Man';
    this.age  = 45;
  }
}
