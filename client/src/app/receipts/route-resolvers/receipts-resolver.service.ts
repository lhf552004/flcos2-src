import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, Router, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {ReceiptsService} from '../shared/receipts.service';
import {Receipt} from '../shared/models/receipt.model';

@Injectable({
  providedIn: 'root'
})
export class ReceiptsResolverService {

  constructor(private receiptsService: ReceiptsService, private router: Router) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Receipt[]> {
    return this.receiptsService.getAll();
  }
}
