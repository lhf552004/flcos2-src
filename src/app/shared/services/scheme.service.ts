import {Injectable} from '@angular/core';
import {environment} from '../../../environments/environment';
import {Observable, of} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {Scheme} from '../models/scheme.model';

@Injectable({
  providedIn: 'root'
})
export class SchemeService {
  constructor(private http: HttpClient) {
  }

  private schemeUrl = environment.baseUrl + 'api/v1/schemes';  // URL to web api

  private mockedOrderScheme: Scheme = {
    id: '1',
    schemeName: 'Order_Scheme',
    builtin: true,
    primitiv: false,
    description: '',
    fields: [
      {
        id: '1',
        fieldName: 'erp_body_data',
        unit: '',
        type: 'array',
        attributes: [],
        fields: [{
          id: '1',
          fieldName: 'vinCode',
          unit: '',
          type: 'string',
          fields: [],
          attributes: []
        },
          {
            id: '2',
            fieldName: 'bodyType',
            unit: '',
            type: 'string',
            fields: [],
            attributes: []
          },
          {
            id: '3',
            fieldName: 'firstColorCode',
            unit: '',
            type: 'string',
            fields: [],
            attributes: []
          },
          {
            id: '4',
            fieldName: 'secondColorCode',
            unit: '',
            type: 'string',
            fields: [],
            attributes: []
          },
          {
            id: '5',
            fieldName: 'carCategory',
            unit: '',
            type: 'string',
            fields: [],
            attributes: []
          },
          {
            id: '6',
            fieldName: 'roofWindow',
            unit: '',
            type: 'string',
            fields: [],
            attributes: []
          },
          {
            id: '7',
            fieldName: 'orderNumber',
            unit: '',
            type: 'string',
            fields: [],
            attributes: []
          },
          {
            id: '8',
            fieldName: 'orderType',
            unit: '',
            type: 'string',
            fields: [],
            attributes: []
          },
          {
            id: '9',
            fieldName: 'plantId',
            unit: '',
            type: 'string',
            fields: [],
            attributes: []
          },
          {
            id: '10',
            fieldName: 'twoTonedCar',
            unit: '',
            type: 'string',
            fields: [],
            attributes: []
          }]
      }
    ]
  };

  getSchemes(page: number, size: number): Observable<Scheme[]> {
    const url = `${this.schemeUrl}/?page=${page}&size=${size}`;
    return this.http.get<Scheme[]>(url);
  }

  getSchemeByName(name: string): Observable<any> {
    // const url = `${this.schemeUrl}/by-name/${name}`;
    // return this.http.get(url);
    return of(this.mockedOrderScheme);
  }
}
