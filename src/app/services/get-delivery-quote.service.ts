import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GetDeliveryQuoteService {

  constructor(private http: HttpClient) { }

  quoteUrl = 'http://localhost:3000/quote';

  getDeliveryQuote(params): any {
    return this.http.post(this.quoteUrl, params);
  }
}
