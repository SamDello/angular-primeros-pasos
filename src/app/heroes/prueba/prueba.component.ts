import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-prueba',
  standalone: false,
  template:`
  <h1>{{resultado}}</h1>
  <button (click)="mostrarComp()">mostrar</button>
  <button (click)="reset()">reset2</button>
  `,
  // templateUrl: './prueba.component.html',
  styleUrls: ['./prueba.component.css']
})
export class PruebaComponent {
  public nombre:string = 'samuel';
  public apellido:string = 'delgadillo';
  public resultado:string ='';
  mostrarComp(){
     this.resultado= `mi nombre completo es: ${this.nombre} ${this.apellido}`;
  }
  reset(){
    this.resultado = '';
  }
}
