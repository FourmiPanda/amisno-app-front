import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http: HttpClient) { }

  getAll(criteria, page): Observable<any> {
    let url = environment.api.products.url + '/mission?';
    if (criteria.keyword) {
      url += '&keyword=' + criteria.keyword;
    }
    if (page.limit) {
      url += '&limit=' + page.limit;
    }
    if (page.skip) {
      url += '&skip=' + page.skip;
    }
    if (page.sort) {
      url += '&sort=' + page.sort;
    }
    return this.http.get(url, {withCredentials: true});
  }
}
