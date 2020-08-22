import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GetOrderService {

  constructor() { }

  private orderObj = {
    "uuid": "d69c3dc2-fa19-4686-a5d5-c07acc211b77",
    "pickup": {
      "name": "Zocks SF",
      "address": "425 Market St, San Francisco, CA 94105",
      "phone_number": "4155555555"
    },
    "dropoff": {
      "name": "Joe Johnson",
      "address": "201 3rd St, San Francisco, CA 94103",
      "phone_number": "4156666666"
    },
    "contents": [
      {
        "name": "Zebra Socks",
        "quantity": 2
      },
      {
        "name": "Leopard Socks",
        "quantity": 10
      }
    ]
  }

  getOrder(): any {
    return this.orderObj
  }
}
