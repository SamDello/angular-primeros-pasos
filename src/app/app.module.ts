import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { CounterModule } from './counter/components/counter.module';
import { HeroesModule } from './heroes/heroes.module';
import { DbzModule } from './dbz/dbz.module';

import { AppComponent } from './app.component';
import { PruebaComponent } from './heroes/prueba/prueba.component';
import { PagepruebaModule } from './pageprueba/pageprueba.module';


@NgModule({
  declarations: [
    AppComponent,
    PruebaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CounterModule,
    HeroesModule,
    DbzModule,
    PagepruebaModule,
],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
