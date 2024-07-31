import {Injectable} from '@angular/core';
import {environment} from '../../../environments/environment';
import {BehaviorSubject, Observable, of} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {Scheme} from '../models/scheme.model';
import {tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SchemeService {
  constructor(private http: HttpClient) {
  }

  private schemeUrl = environment.baseUrl + 'api/v1/schemes';  // URL to web api

  schemeNames$: BehaviorSubject<string[]> = new BehaviorSubject<string[]>([]);
  scheme$: BehaviorSubject<Scheme> = new BehaviorSubject<Scheme>(null);

  // private mockedOrderScheme: Scheme = {
  //   id: '1',
  //   schemeName: 'Order_Scheme',
  //   builtin: true,
  //   primitiv: false,
  //   description: '',
  //   fields: [
  //     {
  //       id: '1',
  //       name: 'erp_body_data',
  //       fullName: 'erp_body_data',
  //       scheme: '',
  //       unit: '',
  //       type: 'array',
  //       attributes: [],
  //       fields: [{
  //         id: '1',
  //         name: 'vinCode',
  //         unit: '',
  //         type: 'string',
  //         fields: [],
  //         attributes: []
  //       },
  //         {
  //           id: '2',
  //           name: 'bodyType',
  //           unit: '',
  //           type: 'string',
  //           fields: [],
  //           attributes: []
  //         },
  //         {
  //           id: '3',
  //           name: 'firstColorCode',
  //           unit: '',
  //           type: 'string',
  //           fields: [],
  //           attributes: []
  //         },
  //         {
  //           id: '4',
  //           name: 'secondColorCode',
  //           fullName: 'secondColorCode',
  //           unit: '',
  //           type: 'string',
  //           fields: [],
  //           attributes: []
  //         },
  //         {
  //           id: '5',
  //           name: 'carCategory',
  //           unit: '',
  //           type: 'string',
  //           fields: [],
  //           attributes: []
  //         },
  //         {
  //           id: '6',
  //           name: 'roofWindow',
  //           unit: '',
  //           type: 'string',
  //           fields: [],
  //           attributes: []
  //         },
  //         {
  //           id: '7',
  //           name: 'orderNumber',
  //           unit: '',
  //           type: 'string',
  //           fields: [],
  //           attributes: []
  //         },
  //         {
  //           id: '8',
  //           name: 'orderType',
  //           unit: '',
  //           type: 'string',
  //           fields: [],
  //           attributes: []
  //         },
  //         {
  //           id: '9',
  //           name: 'plantId',
  //           unit: '',
  //           type: 'string',
  //           fields: [],
  //           attributes: []
  //         },
  //         {
  //           id: '10',
  //           name: 'twoTonedCar',
  //           unit: '',
  //           type: 'string',
  //           fields: [],
  //           attributes: []
  //         }]
  //     }
  //   ]
  // };

  getSchemes(page: number, size: number): Observable<Scheme[]> {
    const url = `${this.schemeUrl}/?page=${page}&size=${size}`;
    return this.http.get<Scheme[]>(url);
  }

  getSchemeNames(): Observable<string[]> {
    const url = `${this.schemeUrl}`;
    return this.http.get<string[]>(url).pipe(tap(x => {
      this.schemeNames$.next(x);
    }));
  }

  getSchemeByName(name: string): Observable<any> {
    const url = `${this.schemeUrl}/by-name/${name}`;
    return this.http.get(url).pipe(tap(x => {
      this.scheme$.next(x);
    }));
  }
}
