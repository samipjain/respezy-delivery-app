import { Component } from '@angular/core';
import { GetOrderService } from './services/get-order.service';
import { GetDeliveryQuoteService } from './services/get-delivery-quote.service';
import { DeliveryRequestService } from './services/delivery-request.service';
import { Order } from './models/order';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Respezy Retail Company';

  constructor(private getOrderService: GetOrderService, private getDeliveryQuoteService: GetDeliveryQuoteService, private deliveryRequestService: DeliveryRequestService) {}

  order: Order
  deliveryQuote: any;
  deliveryRequestResult: any;

  getOrder(): void {
    this.order = this.getOrderService.getOrder();
  }

  getDeliveryQuote(): void {
    if (this.order !== undefined) {
      let params = {dropoff_address: this.order.dropoff.address, pickup_address: this.order.pickup.address};

      this.getDeliveryQuoteService.getDeliveryQuote(params).subscribe(data => {
        this.deliveryQuote = data;
      });
    } else {
      this.deliveryQuote = {error: "Please click 'Get an Order' button first"};
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
