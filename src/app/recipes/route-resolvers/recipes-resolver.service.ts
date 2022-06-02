import { Injectable } from '@angular/core';
import {JobService} from '../../jobs/shared/job.service';
import {ActivatedRouteSnapshot, Router, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {Job} from '../../shared/models/job.model';
import {RecipeService} from '../shared/recipe.service';
import {Recipe} from '../../shared/models/recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipesResolverService {

  constructor(private recipeService: RecipeService, private router: Router) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Recipe[]> {
    return this.recipeService.getTemplates();
  }
}
