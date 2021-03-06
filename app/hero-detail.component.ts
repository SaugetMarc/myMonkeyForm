// Keep the Input import for now, we'll remove it later:
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';
import { Location }                 from '@angular/common';

import { HeroService } from './hero.service';
import 'rxjs/add/operator/switchMap';



import { Hero } from './hero';
@Component({
  moduleId: module.id,
  selector: 'my-hero-detail',
  templateUrl: 'hero-detail.component.html',
})

export class HeroDetailComponent implements OnInit {

ngOnInit(): void {
  this.route.params
    .switchMap((params: Params) => this.heroService.getHero(+params['id']))
    .subscribe(hero => this.hero = hero);
}

  @Input() hero: Hero;

  constructor(
  private heroService: HeroService,
  private route: ActivatedRoute,
  private location: Location
) {}

goBack(): void {
  this.location.back();
}

}
