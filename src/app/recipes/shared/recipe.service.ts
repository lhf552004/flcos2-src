import {Injectable} from '@angular/core';
import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Recipe} from '../../shared/models/recipe.model';
import {GenericBaseService} from '../../shared/services/generic-base.service';
import {BehaviorSubject, Observable} from 'rxjs';
import {tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RecipeService extends GenericBaseService<Recipe> {
  allTemplates$: BehaviorSubject<Recipe[]> = new BehaviorSubject<Recipe[]>([]);

  constructor(http: HttpClient) {
    super(http,
      'api/v1/recipes'
    );
  }

  getTemplates(): Observable<Recipe[]> {
    const url = `${this.url}/templates`;
    return this.http.get<any>(url).pipe(tap(l => {
      this.objects$.next(l);
    }));
  }
}
