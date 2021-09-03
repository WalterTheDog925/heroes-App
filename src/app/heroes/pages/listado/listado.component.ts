import { Component, OnInit } from '@angular/core';

import { Hero } from '../../interfaces/heroes.interface';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent implements OnInit {

  heroes: Hero[] = [];

  constructor(private heroesService: HeroesService) { }

  ngOnInit(): void {
    this.heroesService.getHeroes()
      .subscribe(resp => this.heroes = resp);
  }

}
