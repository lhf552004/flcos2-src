import { Injectable } from '@angular/core';
import {SimpleBaseService} from '../../shared/services/simple-base.service';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LinesService extends SimpleBaseService{

  constructor(http: HttpClient) {
    super(http, 'api/v1/lines');
  }
}
