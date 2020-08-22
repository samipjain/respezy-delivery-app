import { Component } from '@angular/core';
import { GetOrderService } from './services/get-order.service';
import { GetDeliveryQuoteService } from './services/get-delivery-quote.service';
import { Order } from './models/order';
import { Quote } from './models/quote';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Respezy Retail Company';

  constructor(private getOrderService: GetOrderService, private getDeliveryQuoteService: GetDeliveryQuoteService) {}

  order: Order
  deliveryQuote: Quote;
  
  getOrder(): void {
    this.order = this.getOrderService.getOrder();
  }

  getDeliveryQuote(): void {
    if (Object.keys(this.order)) {
      let dropoff_address = this.order.dropoff.address;
      let pickup_address = this.order.pickup.address;

      this.deliveryQuote = this.getDeliveryQuoteService.getDeliveryQuote(dropoff_address, pickup_address);
    }
  }
}
