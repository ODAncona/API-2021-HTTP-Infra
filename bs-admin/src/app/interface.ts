export interface Locale {
  value: string;
  viewValue: string;
}

export interface Service {
  icon:string;
  name:string;
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

const API_URL = "http://bs-api:1470/api/"
