import {Hero} from '../hero';
import { HEROES } from '../mock-heroes';

import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})

export class HeroesComponent implements OnInit {
  //hero = 'Windstorm';

  // Liste des héros
  heroes = HEROES;
  // Hero sélectionné
  selectedHero: Hero;
  
  // une instance
  hero: Hero = {
    id: 1,
    name: 'Windstorm'
  };

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
  
  constructor() {}

  ngOnInit() {}
}
