import { Component } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  title = 'Product List';
  imageWidth: number = 50;
  imageMargin: number = 2;
  showImage: boolean = false;
  listFilter: string = 'cart';
  products: any[] = [
    {
      "productImage": 'https://images.unsplash.com/photo-1530893609608-32a9af3aa95c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80',
      "productId": 1,
      "productName": "Apple Laptop",
      "productCode": "GDN-0012",
      "releaseDate": "March 10,2023",
      "description": "Laptop",
      "price": ' 1100.00',
      "starRating": 4.5
    },
    {
      "productImage": 'https://images.unsplash.com/photo-1610230099906-7ad016cf5cf9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
      "productId": 1,
      "productName": "Apple Watch",
      "productCode": "GDN-0012",
      "releaseDate": "March 10,2023",
      "description": "Watch",
      "price": ' 700.00',
      "starRating": 4.1
    },
    {
      "productImage": 'https://images.unsplash.com/photo-1609692814858-f7cd2f0afa4f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
      "productId": 1,
      "productName": "Iphone",
      "productCode": "GDN-0012",
      "releaseDate": "March 10,2023",
      "description": "Mobile Product",
      "price": ' 455.00',
      "starRating": 4.7
    }
  ]
  toggleImage(): void {
    this.showImage = !this.showImage;
  }
}
