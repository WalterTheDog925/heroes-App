import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';

import { HeroesRoutingModule } from './heroes-routing.module';
import { MaterialModule } from '../material/material.module';

import { AddComponent } from './pages/add/add.component';
import { HeroeComponent } from './pages/heroe/heroe.component';
import { HeroCardComponent } from './components/hero-card/hero-card.component';
import { HeroesHomeComponent } from './pages/heroes-home/heroes-home.component';
import { ListadoComponent } from './pages/listado/listado.component';
import { SearchComponent } from './pages/search/search.component';

import { ImagenPipe } from './pipes/imagen.pipe';



@NgModule({
  declarations: [
    AddComponent,
    HeroeComponent,
    HeroCardComponent,
    HeroesHomeComponent,
    ListadoComponent,
    SearchComponent,
    
    ImagenPipe
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    FormsModule,
    MaterialModule,
    HeroesRoutingModule
  ]
})
export class HeroesModule { }
