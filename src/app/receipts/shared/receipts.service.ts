import {Injectable} from '@angular/core';
import {GenericBaseService} from '../../shared/services/generic-base.service';
import {Receipt} from './models/receipt.model';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReceiptsService extends GenericBaseService<Receipt> {

  constructor(http: HttpClient) {
    super(http,
       'api/v1/receipts');
  }
}
