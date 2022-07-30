export interface Locale {
  value: string;
  viewValue: string;
}

export interface Service {
  icon: string;
  name: string;
}

export interface Promotion {
  _id?: string;
  title: string;
  subtitle: string;
  image: string;
  description: string;
  language: string;
  pdf: string;
  selected?: boolean;
  displayed?: boolean;
  filesForm?: any;
}

export interface Menu {
  _id?: string;
  title: string;
  price: number;
  image: string;
  description: string;
  language: string;
  category: string;
  selected?: boolean;
  displayed?: boolean;
  fileForm?: any;
}

export interface Review {
  _id?: string;
  description: string;
  author: string;
  date: string;
  rating: any;
  active: boolean;
  selected?: boolean;
  displayed?: boolean;
}

export interface Room {
  title: string;
  subtitle: string;
  images: string[];
  services: Service[];
  description: string;
}

export interface Language {
  value: string;
  viewValue: string;
}

export interface Mail {
  replyTo: string;
  to: string;
  subject: string;
  html: any;
}

export interface DailyMenu {
  _id?: string;
  title: string;
  pdf: string;
}
//const API_URL = "bs-api:1470/api/"
//const API_URL = "http://localhost:1470/api/"
//const API_URL = "http://localhost/api/"
const API_URL = "http://localhost:1470/"

export { API_URL };
