import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {BehaviorSubject, Observable} from 'rxjs';
import {PhoneModel} from '../shared/model/phone.model';


@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private phonesSubject = new BehaviorSubject([]);

  constructor(private http: HttpClient) {
    const httpGet = http.get<PhoneModel[]>('http://localhost:8090/v2/phone', ).subscribe((res: PhoneModel[]) => {
      this.phonesSubject.next(res);
      httpGet.unsubscribe();
    });
  }

  getPhones = (): BehaviorSubject<PhoneModel[]> => {
    return this.phonesSubject;
  }


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
