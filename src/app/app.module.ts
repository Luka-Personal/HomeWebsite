import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroComponent } from './hero/hero.component';
import { HomesContainerComponent } from './homes-container/homes-container.component';
import { HomeContainerComponent } from './homes-container/home-container/home-container.component';
import { TransInfoComponent } from './homes-container/home-container/trans-info-gel/trans-info.component';
import { TransInfoUsdComponent } from './homes-container/home-container/trans-info-usd/trans-info-usd.component';
import { CurrencybtnComponent } from './homes-container/home-container/currencybtn/currencybtn.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeSizeInfoComponent } from './homes-container/home-container/home-size-info-usd/home-size-info.component';
import { HomeSeperatePageComponent } from './homes-container/home-seperate-page/home-seperate-page.component';
import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
  { path: '', component: HomesContainerComponent },
  { path: 'search/:query/:test', component: HomesContainerComponent },
  { path: 'search', component: HomesContainerComponent },
  { path: 'homedetails/:id', component: HomeSeperatePageComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    HeroComponent,
    HomesContainerComponent,
    HomeContainerComponent,
    TransInfoComponent,
    TransInfoUsdComponent,
    CurrencybtnComponent,
    HomeSizeInfoComponent,
    HomeSeperatePageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
