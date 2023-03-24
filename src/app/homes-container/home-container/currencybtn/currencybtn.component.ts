import { Component, Input, OnInit } from '@angular/core';
import { HomeDataService } from 'src/app/home-data.service';

@Component({
  selector: 'app-currencybtn',
  templateUrl: './currencybtn.component.html',
  styleUrls: ['./currencybtn.component.css'],
})
export class CurrencybtnComponent implements OnInit {
  @Input() isUSD!: boolean;
  constructor(private service: HomeDataService) {}

  ngOnInit(): void {}
  emitCurChangeEvent() {
    this.service.currencyChangeEvent.emit();
  }
}
