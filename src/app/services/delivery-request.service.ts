import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DeliveryRequestService {

  constructor(private http: HttpClient) { }

  quoteUrl = 'http://localhost:3000/delivery_request';

  makeDelieryRequest(params): any {
    return this.http.post(this.quoteUrl, params);
  }
}
