import { Component, OnInit } from '@angular/core';
import { IProduct } from './product';
import { ProductService } from './product.services';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  pageTitle = 'Product List';
  imageWidth: number = 50;
  imageMargin: number = 2;
  showImage: boolean = false;
  // listFilter: string = 'cart';
  private _listFilter: string = '';
  errorMessage: string = '';
  
  get listFilter(): string {
    return this._listFilter;
  }

  set listFilter(value: string) {
    this._listFilter = value;
    console.log('In setter : ', value);
    this.filteredProducts = this.performFilter(value);
  }

  filteredProducts: IProduct[] = [];
  products: IProduct[] = [

  ];

  displayVal: string = '';
  getValue(val: string) {
    this.displayVal = val;
  }
  addValue(val: string) {
    this.displayVal = val;
  }
  constructor(private productService: ProductService) { }

  performFilter(filterBy: string): IProduct[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.products.filter((product: IProduct) =>
      product.productName.toLocaleLowerCase().includes(filterBy)
    );
  }

  toggleImage(): void {
    this.showImage = !this.showImage;
  }

  ngOnInit(): void {
    this.productService.getProduct().subscribe({
      next: products => {
        this.products = products,
          this.filteredProducts = this.products;
      },
      error: err => this.errorMessage = err
    });

  }
  onRatingClicked(message: string): void {
    this.pageTitle = 'Product List: ' + { message };
  }
}
