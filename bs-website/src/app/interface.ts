/**
 * This interface describes a locale for language selection the code refers to:
 * -en for english
 * -fr for french
 * -de for german
 * -it for italian
 * -zh for chinese
 * -ar for arabic
 */
export interface Locale {
  code: string;
  label: string;
}

/**
 * This interface describes a promotion for the hotel.
 */
export interface Promotion {
  title: string;
  subtitle: string;
  image: string;
  description: string;
  language: string;
  pdf: string;
  voucher?: string;
  _id?: string;
  selected?: boolean;
  displayed?: boolean;
  filesForm?: any;
}

/**
 * This interface describes a Meal entry for the restaurant.
 */
export interface Meal {
  title: string;
  price: number;
  image: string;
  description: string;
  language: string;
  category: string;
  _id?: string;
  selected?: boolean;
  displayed?: boolean;
  fileForm?: any;
}

/**
 * This interface describes a menu for the restaurant
 */
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
}

/**
 * This interface describes a user review for the hôtel
 */
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

/**
 * This interface describes a Room
 */
export interface Room {
  title: string;
  images: string[];
  services: any[];
  description: string;
  roomSize: string;
}

/**
 * This interface describe a Team member
 */
export interface Member {
  firstname: string;
  lastname: string;
  function: string;
  image: string;
  _id?: string;
}

/**
 * This interface describes a mail
 */
export interface Mail {
  replyTo: string;
  to: string;
  subject: string;
  html: any;
}

/* This constant refers to the api URI location */
//const API_URL = "bs-api:1470/api/"
//const API_URL = "http://localhost:1470/api/"
//const API_URL = "http://localhost/api/"
//const API_URL = 'http://localhost:1470/';
//const API_URL = 'http://178.128.123.90:1470/';
//const API_URL = "https://67.207.74.150:1470/";
const API_URL = "https://api.hotelbeausite.ch/"


/* This constant refers to the email address of admin */
//const BS_EMAIL = 'olivier_dancona@hotmail.com';
const BS_EMAIL = 'info@beausite.ch'

const BS_PHONE = '+41 (0)33 673 82 82';

const BS_INSTAGRAM = 'https://www.instagram.com/beau.site/';
const BS_FACEBOOK = 'https://www.facebook.com/profile.php?id=100086016645773';
const BS_GOOGLE = 'https://www.google.es/maps?q=Hotel+Beau-Site+-+Boutique+Chalet+Adelboden+-+Suiza&um=1&ie=UTF-8&sa=X&ved=0ahUKEwiQv6D01NnKAhUJVz4KHdfyC8UQ_AUIBygB';


export { API_URL, BS_EMAIL, BS_PHONE, BS_INSTAGRAM, BS_FACEBOOK, BS_GOOGLE };
