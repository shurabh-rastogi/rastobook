import { Injectable } from '@angular/core';
import {Http, Response} from "@angular/http";
import "rxjs/add/operator/map";

@Injectable()
export class ViewProfileService {

  private base_url = 'https://jsonplaceholder.typicode.com/';
  private service_url = 'users/1';

  constructor(
    private http: Http
  ) { }

  callUserProfile(){
    return this.http.get(this.base_url + this.service_url);
  }
}
