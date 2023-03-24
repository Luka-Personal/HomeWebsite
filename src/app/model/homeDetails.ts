export interface HomeDetailsCard {
  id: number;
  photoUrls: string[];
  title: string;
  location: string[] | string;
  detailedTitle: string;
  monthlyRentPrice?: number;
  dailyRentPrice?: number;
  sellingPrice?: number;
  leaseholdPrice?: number;
  homeSize: number;
  floor?: string;
  rooms?: number;
  bedroom?: number;
  dateUploaded: number | string;
  phoneNumber: string;
  transactionType: string;
}
