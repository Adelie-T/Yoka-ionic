import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from './models/product';
import { ProductInterface } from './models/product-interface';
import { BarcodeScanner, BarcodeScanResult} from '@ionic-native/barcode-scanner/ngx'

@Injectable({
  providedIn: 'root'
})
export class ScanService {
  private readonly api: string = 'https://world.openfoodfacts.org/api/v0/product/';

  constructor(
    private httpClient: HttpClient,
    private barcodescanner : BarcodeScanner) { }

  public scan(): Promise<Observable<ProductInterface>> {
      return this.barcodescanner.scan().then((barcodeResult : BarcodeScanResult): any => {
                console.log(`Barcode says ${barcodeResult.text}`);
       this.getProduct(barcodeResult.text);
      });    
  }

  private getProduct(ean: string): Observable<ProductInterface> {
    return this.httpClient.get<ProductInterface>( //get est un verbe http
      // url : 
    `${this.api}${ean}.json` // idem : this.api + ean + '.json' 
    );
  }
}
