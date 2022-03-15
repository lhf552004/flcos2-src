import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';
import {Line} from '../../lines/shared/models/line.model';
import {tap} from 'rxjs/operators';
import {environment} from '../../../environments/environment';
import {ProcessVariable} from './models/process-variable.model';
import {NewProcessVariable} from './models/new-process-variable.model';

@Injectable({
  providedIn: 'root'
})
export class ProcessVariableService {
  private processVariableUrl = environment.baseUrl + 'api/v1/process-variables';  // URL to web api
  allProcessVariables$: BehaviorSubject<ProcessVariable[]> = new BehaviorSubject<ProcessVariable[]>([]);

  constructor(private http: HttpClient) {
  }

  // Get the list of menu items
  getAll(): Observable<ProcessVariable[]> {
    const url = `${this.processVariableUrl}`;
    return this.http.get<any>(url).pipe(tap(l => {
      this.allProcessVariables$.next(l);
    }));
  }

  get(id: string): Observable<ProcessVariable> {
    const url = `${this.processVariableUrl}/${id}`;
    return this.http.get<ProcessVariable>(url);
  }

  create(newProcessVariable: NewProcessVariable): Observable<any> {
    const url = `${this.processVariableUrl}`;
    return this.http.post<any>(url, newProcessVariable).pipe(tap(x => {
      const processVariables = this.allProcessVariables$.getValue();
      processVariables.push({...newProcessVariable, id: x});
      this.allProcessVariables$.next(processVariables);
    }));
  }

  update(id: string, processVariable: ProcessVariable): Observable<any> {
    const url = `${this.processVariableUrl}/${id}`;
    return this.http.put<any>(url, processVariable).pipe(tap(x => {
      console.log(processVariable);
      const processVariables = this.allProcessVariables$.getValue();
      const idx = processVariables.findIndex(l => l.id === id);
      if (idx > -1) {
        processVariables.splice(idx, 1, processVariable);
      }
      this.allProcessVariables$.next(processVariables);
    }));
  }

  delete(id: string): Observable<any> {
    const url = `${this.processVariableUrl}/${id}`;
    return this.http.delete<any>(url).pipe(tap(x => {
      const processVariables = this.allProcessVariables$.getValue();
      const idx = processVariables.findIndex(l => l.id === id);
      if (idx > -1) {
        processVariables.splice(idx, 1);
      }
      this.allProcessVariables$.next(processVariables);
    }));
  }
}
