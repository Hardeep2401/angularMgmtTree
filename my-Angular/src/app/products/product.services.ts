import { Injectable } from '@angular/core';
import { IProduct } from './product';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  getProduct(): IProduct[] {
    return [
      {
        productImage:
          'https://images.unsplash.com/photo-1530893609608-32a9af3aa95c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80',
        productId: 1,
        productName: 'Apple Laptop',
        productCode: 'GDN-0012',
        releaseDate: 'March 10,2023',
        description: 'Laptop',
        price: 1100.0,
        starRating: 4.5,
      },
      {
        productImage:
          'https://images.unsplash.com/photo-1610230099906-7ad016cf5cf9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
        productId: 2,
        productName: 'Apple Watch',
        productCode: 'GDN-0012',
        releaseDate: 'March 10,2023',
        description: 'Watch',
        price: 700.0,
        starRating: 4.1,
      },
      {
        productImage:
          'https://images.unsplash.com/photo-1610792516307-ea5acd9c3b00?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
        productId: 3,
        productName: 'Samsung Mobile',
        productCode: 'GDN-0012',
        releaseDate: 'March 10,2023',
        description: 'Watch',
        price: 700.0,
        starRating: 4.1,
      },
      {
        productImage:
          'https://images.unsplash.com/photo-1609692814858-f7cd2f0afa4f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
        productId: 4,
        productName: 'Iphone Apple',
        productCode: 'GDN-0012',
        releaseDate: 'March 10,2023',
        description: 'Mobile Product',
        price: 455.0,
        starRating: 4.7,
      },
    ];
  }
}
