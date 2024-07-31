import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { BinService } from '../shared/bin.service';
import { Bin } from '../shared/models/bin.model';

@Injectable({
  providedIn: 'root'
})
export class BinResolverService {

  constructor(private binService: BinService, private router: Router) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Bin> {
    const id = route.paramMap.get('binId');
    return this.binService.getBin(id as string);
  }
}
