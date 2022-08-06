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
  _id?: string;
  title: string;
  pdf: string;
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
  services: Service[];
  description: string;
  roomSize: string;
}

/**
 * This interface describes a service. It can have an angular material icon
 */
export interface Service {
  icon: string;
  name: string;
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
const API_URL = 'http://localhost:1470/';

/* This constant refers to the email address of admin */
const BS_EMAIL = 'olivier_dancona@hotmail.com'
//const BS_EMAIL = 'info@beausite.ch'


export { API_URL, BS_EMAIL };
