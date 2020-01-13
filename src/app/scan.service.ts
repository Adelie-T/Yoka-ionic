import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from './models/product';
import { ProductInterface } from './models/product-interface';


@Injectable({
  providedIn: 'root'
})
export class ScanService {
  private readonly api: string = 'https://world.openfoodfacts.org/api/v0/product/';

  constructor(private httpClient: HttpClient) { }

  public scan(ean: string): Observable<ProductInterface> {
       return this.httpClient.get<ProductInterface>( //get est un verbe http
        // url : 
      `${this.api}${ean}.json` // idem : this.api + ean + '.json' 
      );
  }
}
