import { Component, Input, OnInit } from '@angular/core';
import { HomeDataService } from 'src/app/home-data.service';
import { HomeDetailsCard } from 'src/app/model/homeDetails';

@Component({
  selector: 'app-home-size-info-usd',
  templateUrl: './home-size-info.component.html',
  styleUrls: ['./home-size-info.component.css'],
})
export class HomeSizeInfoComponent implements OnInit {
  @Input() homeInfo!: HomeDetailsCard;
  @Input() isUSD!: boolean;
  priceUSD!: number;

  constructor(private service: HomeDataService) {}
  ngOnInit(): void {
    this.priceUSD = this.service.priceUSD;
  }
}
