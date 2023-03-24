import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HomeDataService } from '../home-data.service';
import { HomeDetailsCard } from '../model/homeDetails';

@Component({
  selector: 'app-homes-container',
  templateUrl: './homes-container.component.html',
  styleUrls: ['./homes-container.component.css'],
})
export class HomesContainerComponent implements OnInit {
  homeData!: HomeDetailsCard[];
  homeDataFiltered!: HomeDetailsCard[];

  constructor(
    private service: HomeDataService,
    private router: ActivatedRoute,
    private router2: Router
  ) {}
  ngOnInit(): void {
    // ###########
    // ###########
    // ###########
    // ###########
    // ###########
    // ###########
    // ###########
    // ###########
    // ###########
    this.homeData = this.service.getHomeData();
    this.service.filterEvent.subscribe((data: string) => {
      if (data !== `all`) {
        this.homeData = this.service
          .getHomeData()
          .filter((home: HomeDetailsCard) => {
            return home.transactionType === data;
          });
      } else {
        this.homeData = this.service.getHomeData();
      }
      this.homeDataFiltered = this.homeData;
    });
    // ###########
    // ###########
    // ###########
    // ###########
    // ###########
    // ###########
    // ###########
    // ###########
    // ###########
    if (this.router.snapshot.params['query']) {
      // if (this.homeDataFiltered) {
      //   this.homeData = this.homeDataFiltered;
      // }
      this.homeData = this.homeData.filter((home: HomeDetailsCard) => {
        if (Array.isArray(home.location)) {
          return home.location.some((el: string) =>
            el.startsWith(this.router.snapshot.params['query'])
          );
        } else {
          return home.location.startsWith(this.router.snapshot.params['query']);
        }
      });
      if (
        this.router.snapshot.params[`test`] &&
        this.router.snapshot.params[`test`] !== `all`
      ) {
        this.homeData = this.homeData.filter((home: HomeDetailsCard) => {
          return home.transactionType === this.router.snapshot.params[`test`];
        });
        console.log(this.router.snapshot.params[`test`]);
      }
    }
    this.router.params.subscribe((data: any) => {
      if (!data[`query`]) return;
      if (this.homeDataFiltered) {
        this.homeData = this.homeDataFiltered;
      }
      this.homeData = this.homeData.filter((home: HomeDetailsCard) => {
        if (Array.isArray(home.location)) {
          return home.location.some((el: string) =>
            el.startsWith(data[`query`])
          );
        } else {
          return home.location.startsWith(data[`query`]);
        }
      });
      if (
        this.router.snapshot.params[`test`] &&
        this.router.snapshot.params[`test`] !== `all`
      ) {
        this.homeData = this.homeData.filter((home: HomeDetailsCard) => {
          return home.transactionType === this.router.snapshot.params[`test`];
        });
        console.log(this.router.snapshot.params[`test`]);
      }
    });

    this.service.searchEventID.subscribe((searchValueID: string) => {
      this.homeData = this.service.getHomeData();
      this.homeData = this.homeData.filter((home: HomeDetailsCard) => {
        return home.id === +searchValueID;
      });
      console.log(this.homeData);
    });
  }
}
