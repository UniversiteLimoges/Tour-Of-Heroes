import {
  Component,
  OnInit
} from '@angular/core';

import {
  Hero
} from '../hero';
import {
  HeroService
} from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})

export class HeroesComponent implements OnInit {
  // Service injecté
  constructor(private heroService: HeroService) {}

  // Hero
  //hero = 'Windstorm';

  // Liste des héros
  // heroes = HEROES;

  // Hero
  heroes: Hero[];

  // Hero sélectionné
  // selectedHero: Hero;

  // Une instance
  // hero: Hero = {
  //   id: 1,
  //   name: 'Windstorm'
  // };

  // onSelect(hero: Hero): void {
  //   this.selectedHero = hero;
  // }

  // Récupère les héros du service
  getHeroes(): void {
    // Assigne un tableau de héro à la propriété de la composante heroes
    // this.heroes = this.heroService.getHeroes();

    // Attend un observable pour émèttre un tableau de héros
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes);
  }

  // Appel de la méthode avec ngOnInit
  ngOnInit() {
    this.getHeroes();
  }
}
