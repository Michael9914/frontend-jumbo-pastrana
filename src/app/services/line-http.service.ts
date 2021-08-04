import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LineModel } from '../models/line.model';

@Injectable({
  providedIn: 'root'
})
export class LineHttpService {

  constructor(private httpClient: HttpClient) { 

  }
  getAll(){
    return this.httpClient.get('http://backend-jumbo-pastrana.test/api/v1/authentication/lines');
  }

  getOne(id: number) {
    const url = 'http://backend-jumbo-pastrana.test/api/v1/authentication/lines' + id;
    return this.httpClient.get(url);
  }

  create(line: LineModel) {
    const url = 'http://backend-jumbo-pastrana.test/api/v1/authentication/lines';
    return this.httpClient.post(url, line);
  }

  update(id: number, line: LineModel) {
    const url = 'http://backend-jumbo-pastrana.test/api/v1/authentication/lines/' + id;
    return this.httpClient.put(url, line);
  }

  delete(id: number) {
    const url = 'http://backend-jumbo-pastrana.test/api/v1/authentication/lines/' + id;
    return this.httpClient.delete(url);
  }

}
