import { Component } from '@angular/core';
import { GetOrderService } from './services/get-order.service';
import { GetDeliveryQuoteService } from './services/get-delivery-quote.service';
import { DeliveryRequestService } from './services/delivery-request.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Respezy Retail Company';

  constructor(private getOrderService: GetOrderService, private getDeliveryQuoteService: GetDeliveryQuoteService, private deliveryRequestService: DeliveryRequestService) {}

  order = {
    uuid: '',
    pickup: {
        name: '',
        address: '',
        phone_number: '',
    },
    dropoff: {
        name: '',
        address: '',
        phone_number: '',
    },
    contents: [
        {
            name: '',
            quantity: '',
            size: ''
        }
    ]
  }
  manifest_items = {
    name: '',
    quantity: '',
    size: ''
  }
  deliveryQuote: any;
  deliveryRequestResult: any;

  onSubmit(): void {
    let nameArr = this.manifest_items.name.split(',');
    let quantityArr = this.manifest_items.quantity.split(',');
    let sizeArr = this.manifest_items.size.split(',');
    let len_manifest_itmes = nameArr.length;

    let manifest_items_arr = []

    for (let i = 0; i < len_manifest_itmes; i++) {
      manifest_items_arr.push({name: nameArr[i].trim(), quantity: parseInt(quantityArr[i]), size: sizeArr[i].trim()})  
    }

    this.order.contents = manifest_items_arr;
  }

  getOrder(): void {
    this.order = this.getOrderService.getOrder();
  }

  getDeliveryQuote(): void {
    if (this.order.pickup.name !== '' && this.order.dropoff.name !== '') {
      let params = {dropoff_address: this.order.dropoff.address, pickup_address: this.order.pickup.address};

      this.getDeliveryQuoteService.getDeliveryQuote(params).subscribe(data => {
        this.deliveryQuote = data;
      });
    } else {
      this.deliveryQuote = {error: "Please fill out the order form"};
    }
  }

  requestDelivery(): void {
    if (this.order !== undefined && this.deliveryQuote !== undefined) {
      let params = {
        dropoff_address: this.order.dropoff.address,
        dropoff_name: this.order.dropoff.name,
        dropoff_phone_number: this.order.dropoff.phone_number,
        pickup_address: this.order.pickup.address,
        pickup_name: this.order.pickup.name,
        pickup_phone_number: this.order.pickup.phone_number,
        manifest: 'Designer Socks',
        manifest_items: this.order.contents,
        quote_id: this.deliveryQuote.id
      }

      this.deliveryRequestService.makeDelieryRequest(params).subscribe(data => {
        this.deliveryRequestResult = data;
      });
    } else {
      this.deliveryRequestResult = {error: "Please click 1. Get an Order and 2. Get Delivery Quote"};
    }
  }
}
