import { CurrencyPipe } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IProduct } from '../../models/product.model';
import { ApiServiceService } from '../../services/api-service.service';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit{
 

  listProducts: IProduct[] = [];
  private _apiService = inject(ApiServiceService)
  private _router = inject(Router)

 ngOnInit(): void {
   this._apiService.getProducts().subscribe((data:IProduct[]) =>{
    this.listProducts = data
   })
  }

  navigate(id:number){
    this._router.navigate(['/products', id])
  }
}
