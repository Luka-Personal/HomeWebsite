import { Component, Input, OnInit } from '@angular/core';
import { CurrencyAPIService } from 'src/app/currency-api.service';
import { HomeDetailsCard } from 'src/app/model/homeDetails';

@Component({
  selector: 'app-trans-info-gel',
  templateUrl: './trans-info.component.html',
  styleUrls: ['./trans-info.component.css'],
})
export class TransInfoComponent implements OnInit {
  constructor(private service: CurrencyAPIService) {}
  @Input() homeInfo!: HomeDetailsCard;
  priceGEL = 0;

  ngOnInit() {
    if (this.homeInfo.sellingPrice) {
      this.priceGEL = this.homeInfo.sellingPrice;
    }
    if (this.homeInfo.monthlyRentPrice) {
      this.priceGEL = this.homeInfo.monthlyRentPrice;
    }
    if (this.homeInfo.dailyRentPrice) {
      this.priceGEL = this.homeInfo.dailyRentPrice;
    }
    if (this.homeInfo.leaseholdPrice) {
      this.priceGEL = this.homeInfo.leaseholdPrice;
    }
  }
}
