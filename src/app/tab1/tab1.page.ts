import { Component } from '@angular/core';
import { ScanService } from '../scan.service';
import {take} from 'rxjs/operators'; 
import { ProductInterface } from '../models/product-interface';
import { Product } from '../models/product';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  public product: Product;

  constructor(private scanService: ScanService) {}

  public scanAction(): void {
    this.scanService.scan().then((productSubjet: Observable<ProductInterface>) => {
      productSubjet
      .pipe(
        take(1) //quand on souscrit à l'observable c'est sans fin, ici on précise qu'on veut que le (1er) resultat et on se dé-souscrit
      ).subscribe((result: ProductInterface) => {
        this.product = new Product().deserialize(result);
        // console.log(`theProducte nova_groups : ${this.product.nova_groups} ${this.product.code}`);  
    }) 
  });

  }
}
