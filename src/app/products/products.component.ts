import {Component, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ProductService} from '../services/product.service';
@Component({
  selector: 'app-products',
  imports: [CommonModule],
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
  standalone : true
})
export class ProductsComponent implements  OnInit{
  products: Array<any> = [];
  constructor(private  productService : ProductService) {
  }
  trackById(index: number, item: any): number {
    return item.id;
  }

  ngOnInit() {
    this.getAllProducts();
  }
  getAllProducts(): void{
    this.products = this.productService.getAllProducts();
  }
   handleDelete(product: any):void {
    let v = confirm('etes vous sure de vouloir supprimer');
    if (v==true){
      this.productService.deleteProduct(product);
      this.getAllProducts();
    }
  }
}
