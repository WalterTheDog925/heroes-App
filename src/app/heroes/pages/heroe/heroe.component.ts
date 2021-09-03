import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs/operators'

import { Hero } from '../../interfaces/heroes.interface';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styles: [`
    img {
      width: 100%
    }
  `]
})
export class HeroeComponent implements OnInit {

  hero!: Hero;

  constructor(
    private activatedRoute: ActivatedRoute, 
    private heroService: HeroesService,
    private router: Router
    ) {}

  ngOnInit(): void {
    this.activatedRoute.params
      .pipe(
        switchMap( ({id}) => this.heroService.getHeroById(id) )
      )
      .subscribe(heroe => this.hero = heroe);
  }

  goBack() {
    this.router.navigate(['/heroes/listado'])
  }

}
