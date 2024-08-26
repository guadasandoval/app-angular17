import { CurrencyPipe } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IProduct } from '../../models/product.model';
import { ApiServiceService } from '../../services/api-service.service';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css'
})
export class ProductDetailComponent implements OnInit{
  id:number = 0;
  product?: IProduct;
  loading: boolean = true;
  private _routerActive = inject(ActivatedRoute);
  private _apiService = inject(ApiServiceService);

   ngOnInit(): void {
    this._routerActive.params.subscribe((params) =>{
      this.id = params['id'];
    })
    this.getProductDetails();
  }
  
  getProductDetails(){
      this._apiService.getProductById(this.id).subscribe((data:IProduct) =>{
        this.product = data;
        this.loading = false;
      })
  }
}
