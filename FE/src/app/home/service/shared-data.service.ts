import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedDataService {

  // Observable Variables
  private product = new BehaviorSubject<object>(null);
  public product$ = this.product.asObservable();
  constructor() { }

  setProduct(product: object): void {
    this.product.next(product);
  }
}
