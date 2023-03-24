import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { switchMap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CurrencyAPIService {
  exchangeRate = 0;
  constructor(private http: HttpClient) {
    this.getAPIdata();
  }
  async getCurrency() {
    let url =
      'https://v6.exchangerate-api.com/v6/ac47527d82ef2c6d0bcafd0e/latest/GEL';
    return this.http.get(url);
  }
  async getAPIdata() {
    (await this.getCurrency()).subscribe((data: any) => {
      this.exchangeRate = data.conversion_rates.USD;
    });
  }
}
