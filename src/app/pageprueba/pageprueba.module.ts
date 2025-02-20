import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagePruebaComponent } from './pages/pageprueba.component';



@NgModule({
  declarations: [
    PagePruebaComponent,
  ],
  exports:[
    PagePruebaComponent,
  ],
  imports: [
    CommonModule
  ]
})
export class PagepruebaModule { }
