import { Inject, Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable()
export class ProductService {

  // url = this.config.url

  constructor(private $http: HttpClient, @Inject('BASE_CONFIG') private config: any) { }

  // getProductList(): Observable<HttpResponse<any>> {
  //   return this.$http.get('/getProductList', { observe: 'response' })
  // }
}
