export interface Promotion {
  title: string;
  subtitle: string;
  image: string;
  description: string;
  pdf: string;
  _id?: string;
  voucher?: string;
  language?: string;
  selected?: boolean;
  displayed?: boolean;
  filesForm?: any;
}

export interface Meal {
  title: string;
  price: number;
  image: string;
  description: string;
  file?: any;
  _id?: string;
  language?: string;
  category?: string;
  selected?: boolean;
  displayed?: boolean;
  fileForm?: any;
}

export interface Review {
  description: string;
  author: string;
  date: string;
  rating: any;
  active: boolean;
  _id?: string;
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

export interface Service {
  icon: string;
  name: string;
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

export interface Menu {
  title: string;
  pdf: string;
  active: boolean;
  _id?: string;
  file?: any;
  language?: string;
  category?: string;
  selected?: boolean;
  displayed?: boolean;
  fileForm?: any;
}

//const API_URL = "bs-api:1470/api/"
//const API_URL = "http://localhost:1470/api/"
//const API_URL = "http://localhost/api/"
const API_URL = 'http://localhost:1470/';
const MAX_SIZE = 2; //Mo


export { API_URL, MAX_SIZE };
