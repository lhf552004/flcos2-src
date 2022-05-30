import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {SimpleBaseService} from '../../shared/services/simple-base.service';

@Injectable({
  providedIn: 'root'
})
export class SuppliersService extends SimpleBaseService {

  constructor(http: HttpClient) {
    super(http, 'api/v1/suppliers');
  }
}
