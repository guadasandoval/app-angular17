import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IProduct } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {
  private baseUrl: string = 'https://fakestoreapi.com/products'
  private _httpCliente = inject(HttpClient)

  getProducts():Observable<IProduct[]>{
    return this._httpCliente.get<IProduct[]>(this.baseUrl);
  }

  getProductById(id: number):Observable<IProduct>{
    return this._httpCliente.get<IProduct>(`${this.baseUrl}/${id}`);
  }
}
