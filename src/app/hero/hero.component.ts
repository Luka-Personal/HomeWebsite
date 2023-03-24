import { Component, EventEmitter, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HomeDataService } from '../home-data.service';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css'],
})
export class HeroComponent implements OnInit {
  dropDownOn = false;
  sellingType = `all`;
  sellingTypeGeo!: string;
  constructor(
    private service: HomeDataService,
    private actRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {}
  openCategories() {
    this.dropDownOn = !this.dropDownOn;
  }
  sellingEvent() {
    this.sellingType = `selling`;
    this.sellingTypeGeo = 'იყიდება';
    this.service.filterEvent.emit(`selling`);
  }
  allEvent() {
    this.sellingType = `all`;
    this.sellingTypeGeo = 'ყველა';
    this.service.filterEvent.emit(`all`);
    this.router.navigate([`search/`], {
      queryParamsHandling: 'merge',
    });
  }
  rentingEvent() {
    this.sellingType = `renting`;
    this.sellingTypeGeo = `ქირავდება`;
    this.service.filterEvent.emit(`renting`);
  }
  leaseHoldEvent() {
    this.sellingType = `leasehold`;
    this.sellingTypeGeo = `გირავდება`;
    this.service.filterEvent.emit(`leasehold`);
  }
  rentingDailyEvent() {
    this.sellingType = `renting daily`;
    this.sellingTypeGeo = `ქირავდება დღიურად`;

    this.service.filterEvent.emit(`renting daily`);
  }
  searchEvent(searchValue: string) {
    // this.service.searchEvent.emit(searchValue);
    this.router.navigate(['search/', searchValue, this.sellingType]);
  }
  selectSearchValue(e: MouseEvent) {
    (e.target as HTMLInputElement).select();
  }
  searchEventID(searchValueID: string) {
    this.service.searchEventID.emit(searchValueID);
  }
}
