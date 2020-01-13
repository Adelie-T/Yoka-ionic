import { Component } from '@angular/core';
import { ScanService } from '../scan.service';
import {take} from 'rxjs/operators'; 
import { ProductInterface } from '../models/product-interface';
import { Product } from '../models/product';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  public product: Product;


  constructor(private scanService: ScanService) {}

  public fakeScan() : void {
    const ean13: string = '0072417152924'

    this.scanService.scan(ean13)
    .pipe(
      take(1) //quand on souscrit à l'observable c'est sans fin, ici on précise qu'on veut que le (1er) resultat et on se dé-souscrit
    ).subscribe((product : ProductInterface) => {
      this.product = new Product().deserialize(product);
      console.log(`theProducte nova_groups : ${this.product.nova_groups} ${this.product.code}`); 
    });
  }
}
