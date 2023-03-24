import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HomeDataService } from 'src/app/home-data.service';
import { HomeDetailsCard } from 'src/app/model/homeDetails';

@Component({
  selector: 'app-home-seperate-page',
  templateUrl: './home-seperate-page.component.html',
  styleUrls: ['./home-seperate-page.component.css'],
})
export class HomeSeperatePageComponent implements OnInit {
  homeInfo!: HomeDetailsCard;
  constructor(
    private route: ActivatedRoute,
    private service: HomeDataService
  ) {}

  ngOnInit(): void {
    [this.homeInfo] = this.service.getHomeDataById(
      +this.route.snapshot.params['id']
    );
    console.log(this.homeInfo);
  }
}
