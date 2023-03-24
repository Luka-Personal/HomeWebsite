import { EventEmitter, Injectable, OnInit } from '@angular/core';
import { HomeDetailsCard } from './model/homeDetails';

@Injectable({
  providedIn: 'root',
})
export class HomeDataService implements OnInit {
  homeData: HomeDetailsCard[] = [
    {
      id: 1,
      photoUrls: [
        `https://i.imgur.com/8T47v7N.jpg`,
        `https://i.imgur.com/bbn119D.jpg`,
        `https://i.imgur.com/nE1lMHS.jpg`,
        `https://i.imgur.com/Mv7nZB9.jpg`,
        'https://i.imgur.com/l4i1jXh.jpg',
        'https://i.imgur.com/KGEYSVy.jpg',
        'https://i.imgur.com/6XtWpQx.jpg',
        'https://i.imgur.com/LfjuiAV.jpg',
        'https://i.imgur.com/YK6DWqa.jpg',
        'https://i.imgur.com/rEsvh01.jpg',
        'https://i.imgur.com/Olo7pZ4.jpg',
      ],
      title: `იყიდება ბინა წერეთლის მეტროსთან ახლოს.`,
      detailedTitle: `დიდუბე, თბილისი`,
      location: ['tbilisi', 'თბილისი'],
      sellingPrice: 314150,
      homeSize: 140,
      floor: '3/8',
      rooms: 5,
      bedroom: 4,
      dateUploaded: `14 მარტი`,
      phoneNumber: '591 14 74 60',
      transactionType: `selling`,
    },
    {
      id: 2,
      photoUrls: [
        `https://i.imgur.com/130UqOD.jpg`,
        `https://i.imgur.com/PxcnrM9.jpg`,
        `https://i.imgur.com/1wbdst6.jpg`,
        `https://i.imgur.com/EWjr68Z.jpg`,
        `https://i.imgur.com/iqVmQ59.jpg`,
        'https://i.imgur.com/leHQyPN.jpg',
        'https://i.imgur.com/haKegJq.jpg',
        'https://i.imgur.com/DIvWqxT.jpg',
        'https://i.imgur.com/o48UH86.jpg',
        'https://i.imgur.com/mFJ6vRH.jpg',
        'https://i.imgur.com/FpFKHwC.jpg',
        'https://i.imgur.com/EGJkleD.jpg',
      ],
      title: `იყიდება ბინა სოლოლაკში`,
      detailedTitle: `ბეთლემის ქუჩა, თბილისი`,
      sellingPrice: 656625,
      location: ['tbilisi', 'თბილისი'],
      homeSize: 73,
      floor: '2/2',
      rooms: 4,
      bedroom: 2,
      dateUploaded: `14 მარტი`,
      phoneNumber: '591 14 74 60',
      transactionType: `selling`,
    },
    {
      id: 3,
      photoUrls: [
        `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmf6hqoRXi9B8uEKDix0ijTCZYcoRu46ARJ-ckdaC5EQ&s`,
        `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmf6hqoRXi9B8uEKDix0ijTCZYcoRu46ARJ-ckdaC5EQ&s`,
        `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmf6hqoRXi9B8uEKDix0ijTCZYcoRu46ARJ-ckdaC5EQ&s`,
        `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmf6hqoRXi9B8uEKDix0ijTCZYcoRu46ARJ-ckdaC5EQ&s`,
        `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmf6hqoRXi9B8uEKDix0ijTCZYcoRu46ARJ-ckdaC5EQ&s`,
      ],
      title: `ქირავდება ახალი აშენებული ბინა`,
      detailedTitle: `ანგისას ქუჩა 82, შ. ხიმშიაშვილის გამზირი, ბათუმი, აჭარა`,
      monthlyRentPrice: 1000,
      homeSize: 35,
      floor: '2',
      location: 'batumi',
      rooms: 1,
      bedroom: 1,
      dateUploaded: `14 მარტი`,
      phoneNumber: '591 14 74 60',
      transactionType: `renting`,
    },
    {
      id: 4,
      photoUrls: [
        `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmf6hqoRXi9B8uEKDix0ijTCZYcoRu46ARJ-ckdaC5EQ&s`,
        `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmf6hqoRXi9B8uEKDix0ijTCZYcoRu46ARJ-ckdaC5EQ&s`,
        `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmf6hqoRXi9B8uEKDix0ijTCZYcoRu46ARJ-ckdaC5EQ&s`,
        `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmf6hqoRXi9B8uEKDix0ijTCZYcoRu46ARJ-ckdaC5EQ&s`,
        `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmf6hqoRXi9B8uEKDix0ijTCZYcoRu46ARJ-ckdaC5EQ&s`,
      ],
      title: `qiravdeba dgiurad ახალი აშენებული ბინა`,
      detailedTitle: `ანგისას ქუჩა 82, შ. ხიმშიაშვილის გამზირი, ბათუმი, აჭარა`,
      dailyRentPrice: 25,
      homeSize: 35,
      location: ['kutaisi', 'ქუთაისი'],
      floor: '2',
      rooms: 1,
      bedroom: 1,
      dateUploaded: `14 მარტი`,
      phoneNumber: '591 14 74 60',
      transactionType: `renting daily`,
    },
    {
      id: 5,
      photoUrls: [
        `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmf6hqoRXi9B8uEKDix0ijTCZYcoRu46ARJ-ckdaC5EQ&s`,
        `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmf6hqoRXi9B8uEKDix0ijTCZYcoRu46ARJ-ckdaC5EQ&s`,
        `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmf6hqoRXi9B8uEKDix0ijTCZYcoRu46ARJ-ckdaC5EQ&s`,
        `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmf6hqoRXi9B8uEKDix0ijTCZYcoRu46ARJ-ckdaC5EQ&s`,
        `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmf6hqoRXi9B8uEKDix0ijTCZYcoRu46ARJ-ckdaC5EQ&s`,
      ],
      title: `qiravdeba ახალი აშენებული ბინა`,
      detailedTitle: `ანგისას ქუჩა 82, შ. ხიმშიაშვილის გამზირი, ბათუმი, აჭარა`,
      dailyRentPrice: 25,
      homeSize: 99,
      location: ['kutaisi', 'ქუთაისი'],
      floor: '2',
      rooms: 1,
      bedroom: 1,
      dateUploaded: `14 მარტი`,
      phoneNumber: '591 14 74 60',
      transactionType: `renting`,
    },
    {
      id: 5,
      photoUrls: [
        `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmf6hqoRXi9B8uEKDix0ijTCZYcoRu46ARJ-ckdaC5EQ&s`,
        `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmf6hqoRXi9B8uEKDix0ijTCZYcoRu46ARJ-ckdaC5EQ&s`,
        `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmf6hqoRXi9B8uEKDix0ijTCZYcoRu46ARJ-ckdaC5EQ&s`,
        `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmf6hqoRXi9B8uEKDix0ijTCZYcoRu46ARJ-ckdaC5EQ&s`,
        `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmf6hqoRXi9B8uEKDix0ijTCZYcoRu46ARJ-ckdaC5EQ&s`,
      ],
      title: `giravdeba ახალი აშენებული ბინა`,
      detailedTitle: `ანგისას ქუჩა 82, შ. ხიმშიაშვილის გამზირი, ბათუმი, აჭარა`,
      leaseholdPrice: 25,
      homeSize: 99,
      location: ['kutaisi', 'ქუთაისი'],
      floor: '2',
      rooms: 1,
      bedroom: 1,
      dateUploaded: `14 მარტი`,
      phoneNumber: '591 14 74 60',
      transactionType: `leasehold`,
    },
  ];
  constructor() {}
  filterEvent = new EventEmitter<string>();
  currencyChangeEvent = new EventEmitter<void>();
  searchEvent = new EventEmitter<string>();
  searchEventID = new EventEmitter<string>();
  priceUSD!: number;
  isUsdSaved = false;
  sellingTypeGeo!: string;
  ngOnInit() {}
  getHomeData() {
    return this.homeData;
  }
  getHomeDataById(id: number) {
    return this.homeData.filter((home: HomeDetailsCard) => {
      return home.id === id;
    });
  }
}
