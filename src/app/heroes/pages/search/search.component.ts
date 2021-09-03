import { Component, OnInit } from '@angular/core';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { Hero } from '../../interfaces/heroes.interface';

import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: [
  ]
})
export class SearchComponent implements OnInit {

  term: string = '';
  heroes: Hero[] = [];

  selectedHero: Hero | undefined;

  constructor(private heroesService: HeroesService) { }

  ngOnInit(): void {
  }

  searching() {
    this.heroesService.getSuggestions(this.term.trim())
      .subscribe(heroesParam => this.heroes = heroesParam);
  }

  opSelected(event: MatAutocompleteSelectedEvent) {

    if(!event.option.value) {
      this.selectedHero = undefined;
      return;
    }

    const hero = event.option.value;
    this.term = hero.superhero;

    this.heroesService.getHeroById(hero.id)
      .subscribe(hero => this.selectedHero = hero)
  }

}
