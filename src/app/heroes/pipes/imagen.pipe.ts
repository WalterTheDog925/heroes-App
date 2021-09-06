import { Pipe, PipeTransform } from '@angular/core';
import { Hero } from '../interfaces/heroes.interface';

@Pipe({
  name: 'image'
})
export class ImagenPipe implements PipeTransform {

  transform(hero: Hero): string {
    if(!hero.id && !hero.alt_img) return 'assets/no-image.png';
    if(hero.alt_img) return hero.alt_img;
    else return `assets/heroes/${hero.id}.jpg`;
  }

}
