import { GuardsCheckStart } from '@angular/router';

export class User {
  id: number;
  name: string;
  roles: string[];
}

export class Guest{
  id: number;
  firstName: string;
  lastName: string;
  dob: Date;
  isMember: boolean;
  memberShip: string;

  constructor(firstName: string, lastName: string){
    this.firstName = firstName;
    this.lastName = lastName;
  }
}

export class Booking{
  id: number;
  guest: Guest;
  pnr: string;
  nights: number;
  source: string;
  rooms: string;
  mealPlan: string;
  adults: number;
  children: number;
  infants: number;
  amountDewOnCheckIn: number;

  constructor(guest: Guest){
    this.guest = guest;
  }

  guests(): number {
    return this.adults + this.children + this.infants;
  }
}
