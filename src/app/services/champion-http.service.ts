import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ChampionModel } from '../models/champion.model';

@Injectable({
  providedIn: 'root'
})
export class ChampionHttpService {

  constructor(private httpClient: HttpClient) { 

  }

  getAll(){
    return this.httpClient.get('http://backend-jumbo-pastrana.test/api/v1/authentication/champions/1/lines');
  }

  getOne(id: number) {
    const url = 'http://backend-jumbo-pastrana.test/api/v1/authentication/champions/1/lines/' + id;
    return this.httpClient.get(url);
  }

  create(champion: ChampionModel) {
    const url = 'http://backend-jumbo-pastrana.test/api/v1/authentication/champions/1/lines';
    return this.httpClient.post(url, champion);
  }

  update(id: number | undefined, champion: ChampionModel) {
    const url = 'http://backend-jumbo-pastrana.test/api/v1/authentication/champions/1/lines' + id;
    return this.httpClient.put(url, champion);
  }

  delete(id: number | undefined) {
    const url = 'http://backend-jumbo-pastrana.test/api/v1/authentication/champions/1/lines' + id;
    return this.httpClient.delete(url);
  }
}
