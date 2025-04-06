import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}
  private baseUrl = 'http://localhost:5000/api/'; // Update with your actual backend route

  addColors(obj: any): Observable<any> {
    return this.http.post<any>(this.baseUrl + 'colors', obj);
  }
  getColors() {
    return this.http.get(this.baseUrl + 'colors');
  }

  createCategory(category: any) {
    return this.http.post(this.baseUrl + 'categories', category);
  }
  getCategeory() {
    return this.http.get(this.baseUrl + 'categories');
  }

  addFeature(data: any) {
    return this.http.post(this.baseUrl + 'features', data);
  }
  getAccessories() {
    return this.http.get(this.baseUrl + 'accessories');
  }

  addAccesories(data: any): Observable<any> {
    return this.http.post(this.baseUrl + 'accessories', data);
  }
  getFeatures() {
    return this.http.get(this.baseUrl + 'features');
  }
  addVariant(data: any): Observable<any> {
    return this.http.post(this.baseUrl + 'variants', data);
  }
  getAllVerients() {
    return this.http.get(this.baseUrl + 'variants');
  }
  createModel(data: any): Observable<any> {
    return this.http.post(this.baseUrl + 'models', data);
  }
  getAllModels() {
    return this.http.get(this.baseUrl + 'models');
  }
  getVariantByID(id: string): Observable<any> {
    return this.http.get(this.baseUrl + 'variants/' + id);
  }
}
