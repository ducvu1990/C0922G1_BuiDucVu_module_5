import {Injectable} from '@angular/core';
import {Product} from '../model/product';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private httpClient: HttpClient) {
  }

  getAll(): Observable<Product[]> {
    return this.httpClient.get<Product[]>('http://localhost:3000/products');
  }

  saveProduct(product: Product): Observable<Product> {
    return this.httpClient.post<Product>('http://localhost:3000/products', product);
  }

  findProductById(id: number): Observable<Product> {
    return this.httpClient.get<Product>('http://localhost:3000/products/' + id);
  }

  updateProduct(id: number, product: Product): Observable<Product> {
    return this.httpClient.put<Product>('http://localhost:3000/products/' + id, product);
  }

  deleteProduct(id: number): Observable<Product> {
    return this.httpClient.delete('http://localhost:3000/products/' + id);
  }
}
