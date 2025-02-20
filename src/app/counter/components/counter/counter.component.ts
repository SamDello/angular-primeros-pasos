import { Component } from "@angular/core";


@Component({
  selector: 'app-counter',
  standalone: false,
  template: `
  <h3>Counter: {{counter}}</h3>

<button (click)="incrementar(1)">boton1</button>
<button (click)="resetear()">reset</button>
<button (click)="decrementar(1)">boton2</button>
  `
})
export class CounterComponent{
  public counter:number = 10;


  resetear():void{
    this.counter = 10;
  }
  incrementar(value:number):void{
    this.counter +=value;
  }
  decrementar(value2:number):void{
    this.counter-=value2;
  }

}
