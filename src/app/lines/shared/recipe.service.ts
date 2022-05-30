import { Injectable } from '@angular/core';
import {environment} from '../../../environments/environment';
import {BehaviorSubject, Observable} from 'rxjs';
import {Line} from './models/line.model';
import {HttpClient} from '@angular/common/http';
import {tap} from 'rxjs/operators';
import {Recipe} from '../../shared/models/recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  private recipeUrl = environment.baseUrl + 'api/v1/recipes';  // URL to web api
  allTemplates$: BehaviorSubject<Recipe[]> = new BehaviorSubject<Recipe[]>([]);

  constructor(private http: HttpClient) {
  }

  // Get the list of menu items
  getTemplates(): Observable<Recipe[]> {
    const url = `${this.recipeUrl}/templates`;
    return this.http.get<any>(url).pipe(tap(l => {
      this.allTemplates$.next(l);
    }));
  }
}
