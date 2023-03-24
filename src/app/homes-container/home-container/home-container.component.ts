import { Component, Input, OnInit } from '@angular/core';
import { HomeDataService } from 'src/app/home-data.service';
import { HomeDetailsCard } from 'src/app/model/homeDetails';

@Component({
  selector: 'app-home-container',
  templateUrl: './home-container.component.html',
  styleUrls: ['./home-container.component.css'],
})
export class HomeContainerComponent implements OnInit {
  @Input() homeInfo!: HomeDetailsCard;
  num = 0;
  constructor(private service: HomeDataService) {}
  isUsd = false;
  ngOnInit() {
    this.service.currencyChangeEvent.subscribe(() => {
      this.isUsd = !this.isUsd;
      this.service.isUsdSaved = this.isUsd;
    });

    this.isUsd = this.service.isUsdSaved;
  }
  slideR(carouselLength: number) {
    if (this.num < carouselLength - 1) {
      this.num++;
    } else {
      this.num = 0;
    }
  }
  slideL(carouselLength: number) {
    if (this.num > 0) {
      this.num--;
    } else {
      this.num = 0;
    }
  }
}
