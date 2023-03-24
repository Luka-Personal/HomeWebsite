import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

// save

// this.service.searchEvent.subscribe((searchValue: string) => {
//   console.log(this.router.snapshot.params);
//   this.homeData = this.service.getHomeData();
//   if (this.homeDataFiltered) {
//     this.homeData = this.homeDataFiltered;
//   }
//   this.homeData = this.homeData.filter((home: HomeDetailsCard) => {
//     if (Array.isArray(home.location)) {
//       return home.location.some((el: string) =>
//         el.startsWith(searchValue.toLowerCase())
//       );
//     } else {
//       return home.location.startsWith(searchValue.toLowerCase());
//     }
//   });
// });
