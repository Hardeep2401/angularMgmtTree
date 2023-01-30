import { Component } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  title = 'Product List';
  products: any[] = [
    {
      "productId": 1,
      "productName": "Laptop Apple",
      "productCode": "GDN-0012",
      "releaseDate": "March 10,2023",
      "description": "Laptop",
      "price": '$ 1100.00',
      "starRating": 4.5
    },
    {
      "productId": 1,
      "productName": "Mobile Samsung",
      "productCode": "GDN-0012",
      "releaseDate": "March 10,2023",
      "description": "Samsung Product",
      "price": '$ 455.00',
      "starRating": 4.7
    }
  ]
}
