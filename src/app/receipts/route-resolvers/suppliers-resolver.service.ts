import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Router, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {SuppliersService} from '../shared/suppliers.service';
import {SimpleBase} from '../../shared/models/simple-base.model';

@Injectable({
  providedIn: 'root'
})
export class SuppliersResolverService {

  constructor(private suppliersService: SuppliersService, private router: Router) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<SimpleBase[]> {
    return this.suppliersService.getSimpleAll();
  }
}
