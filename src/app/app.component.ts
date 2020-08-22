import { Component } from '@angular/core';
import { GetOrderService } from './services/get-order.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Respezy Retail Company';

  constructor(private getOrderService: GetOrderService) {}

  order: Object = {}
  deliveryQuote: Object = {}
  

  getOrder(): void {
    this.order = this.getOrderService.getOrder();
  }
}
