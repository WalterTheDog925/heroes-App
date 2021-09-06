import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { Hero, Publisher } from '../../interfaces/heroes.interface';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styles: [`
    img {
      width: 100%;
    }
  `]
})
export class AddComponent implements OnInit {

  publishers = [
    {
      id: 'DC Comics',
      desc: 'DC - Comics'
    },
    {
      id: 'Marvel Comics',
      desc: 'Marvel - Comics'
    }
  ];

  hero: Hero = {
    superhero: '',
    alter_ego: '',
    characters: '',
    first_appearance: '',
    publisher: Publisher.DCComics,
    alt_img: ''
  }

  constructor(
    private heroesService: HeroesService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
    if(!this.router.url.includes('edit')) return;

    this.activatedRoute.params
      .pipe(
        switchMap(({id}) => this.heroesService.getHeroById(id))
      )
      .subscribe(hero => this.hero = hero)
  }

  save() {
    if(this.hero.superhero.trim().length === 0) return;
    
    (this.hero.id) 
      // Update 
      ? this.heroesService.updateHero(this.hero).subscribe(hero => this.showSnackBar('Hero Updated'))
      // Create
      : this.heroesService.addhero(this.hero)
        .subscribe(hero => {
          this.router.navigate(['/heroes/edit', hero.id])
          this.showSnackBar('Hero Created');
        });
  }

  delete() {
    this.heroesService.deleteHero(this.hero.id!)
      .subscribe(resp => {
        this.router.navigate(['/heroes']);
      })
  }

  showSnackBar(msg: string) {
    this.snackBar.open(msg, 'Close', {
      duration: 2500
    });
  }

}
