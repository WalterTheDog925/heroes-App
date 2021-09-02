import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';

import { HeroesRoutingModule } from './heroes-routing.module';

import { AddComponent } from './pages/add/add.component';
import { HeroeComponent } from './pages/heroe/heroe.component';
import { HeroesHomeComponent } from './pages/heroes-home/heroes-home.component';
import { ListadoComponent } from './pages/listado/listado.component';
import { SearchComponent } from './pages/search/search.component';



@NgModule({
  declarations: [
    AddComponent,
    HeroeComponent,
    HeroesHomeComponent,
    ListadoComponent,
    SearchComponent
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    HeroesRoutingModule
  ]
})
export class HeroesModule { }
