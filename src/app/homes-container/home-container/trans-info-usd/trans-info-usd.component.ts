import { Component, Input, OnInit, Output } from '@angular/core';
import { CurrencyAPIService } from 'src/app/currency-api.service';
import { HomeDataService } from 'src/app/home-data.service';
import { HomeDetailsCard } from 'src/app/model/homeDetails';

@Component({
  selector: 'app-trans-info-usd',
  templateUrl: './trans-info-usd.component.html',
  styleUrls: ['./trans-info-usd.component.css'],
})
export class TransInfoUsdComponent implements OnInit {
  constructor(
    private service: CurrencyAPIService,
    private service2: HomeDataService
  ) {}
  @Input() homeInfo!: HomeDetailsCard;

  priceUSD = 0;

  ngOnInit(): void {
    this.toUSD();
  }

  toUSD() {
    if (this.homeInfo.sellingPrice) {
      this.priceUSD = this.homeInfo.sellingPrice * this.service.exchangeRate;
    }
    if (this.homeInfo.monthlyRentPrice) {
      this.priceUSD =
        this.homeInfo.monthlyRentPrice * this.service.exchangeRate;
    }
    if (this.homeInfo.dailyRentPrice) {
      this.priceUSD = this.homeInfo.dailyRentPrice * this.service.exchangeRate;
    }
    if (this.homeInfo.leaseholdPrice) {
      this.priceUSD = this.homeInfo.leaseholdPrice * this.service.exchangeRate;
    }
    this.service2.priceUSD = this.priceUSD;
  }
}
