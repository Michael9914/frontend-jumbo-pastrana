import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ChampionModel } from '../models/champion.model';
import {catchError, map} from 'rxjs/operators';
import {ServerResponse} from '../models/server-response';
import {Handler} from '../exceptions/handler';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ChampionHttpService {
  API_URL_PRIVATE: string = environment.API_URL_PRIVATE;
  API_URL_PUBLIC: string = environment.API_URL_PUBLIC;

  constructor(private httpClient: HttpClient) { 
    
  }

  getAll(): Observable<ServerResponse>{
    const url = this.API_URL_PRIVATE + '/champions';
    return this.httpClient.get<ServerResponse>(url)
    .pipe(
      map(response => response),
      catchError(Handler.render)
    );
  }

  getOne(id: number): Observable<ServerResponse> {
    const url = this.API_URL_PRIVATE + '/champions/' + id;
    return this.httpClient.get<ServerResponse>(url)
    .pipe(
      map(response => response),
      catchError(Handler.render)
    );
  }

  store(champion: ChampionModel): Observable<ServerResponse> {
    const url = this.API_URL_PRIVATE + '/champions';
    return this.httpClient.post<ServerResponse>(url, champion)
    .pipe(
      map(response => response),
      catchError(Handler.render)
    );
  }

  update(id: number | undefined, champion: ChampionModel): Observable<ServerResponse> {
    const url = this.API_URL_PRIVATE + '/champions/' + id;
    return this.httpClient.put<ServerResponse>(url, champion)
    .pipe(
      map(response => response),
      catchError(Handler.render)
    );
  }

  delete(id: number | undefined): Observable<ServerResponse> {
    const url = this.API_URL_PRIVATE + '/champions/' + id;
    return this.httpClient.delete<ServerResponse>(url)
    .pipe(
      map(response => response),
      catchError(Handler.render)
    );
  }
}
