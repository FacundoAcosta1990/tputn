import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private apiUrl = 'assets/products.json'; // URL de la API o archivo JSON

  constructor(private http: HttpClient) { }

  getProducts(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  getProduct(id: number): Observable<any> {
    return this.http.get<any[]>(this.apiUrl).pipe(
      map(products => products.find(product => product.id === id))
    );
  }
}
