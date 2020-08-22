import { Injectable } from '@angular/core';
import { Guest, Booking } from './model/user';
import * as moment from 'moment';

@Injectable({
  providedIn: 'root'
})
export class BookingsService {

  bookings: Booking[] = [];

  constructor() {
    this.setup();
   }

   checkIns(date: Date = new Date()): Booking[]{
     return this.bookings;
   }

  setup(date: Date = new Date()){
    const guest1: Guest = new Guest('Prashant', 'Mishra');
    guest1.id = 1;
    guest1.isMember = true;
    guest1.dob = moment('12-04-1984', 'DD-MM-YYYY').toDate();
    guest1.memberShip = 'gold';

    const guest2: Guest = new Guest('Rajat', 'Singhal');
    guest2.id = 2;
    guest2.isMember = false;
    guest2.dob = moment('12-04-1984', 'DD-MM-YYYY').toDate();

    const booking: Booking = new Booking(guest1);
    booking.id = 1;
    booking.adults = 2;
    //booking.children = 1;
    //booking.infants = 1;
    booking.source = 'bookings.com';
    booking.mealPlan = 'EAP';
    booking.nights = 3;
    booking.pnr = 'SBO0001313AC';
    booking.amountDewOnCheckIn = 50000;
    booking.rooms = '2 Rooms ( 1Lax + 1 Std)';

    const booking1: Booking = new Booking(guest2);
    booking1.id = 2;
    booking1.adults = 2;
    booking1.children = 2;
    booking1.infants = 0;
    booking1.source = 'bookings.com';
    booking1.mealPlan = 'EAP';
    booking1.nights = 1;
    booking1.pnr = 'SBO0001313AC';
    booking1.amountDewOnCheckIn = 50000;
    booking1.rooms = '2 Rooms ( 1Lax + 1 Std)';

    this.bookings.push(booking);
    this.bookings.push(booking1);
  }

  find(id: number): Booking{
    for (const booking of this.bookings){
      if (booking.id === id) {
        return booking;
      }
    }
    return;
  }
}
