import { Component } from '@angular/core';
import {AppEvent} from './app.eventModel';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  txtNgModel = 'DEMO ON [(NgModel)]';
  eventArray: AppEvent[];
  event1: AppEvent = {
    name: 'Angular Connect',
    date: '30 Mar 2018',
    time: '9:00 -19:00',
    venue: 'Hyderabad Telangana'
  };

newEvent: AppEvent = {
  name: '',
  date: '',
  time: '',
  venue: ''
};

createNewProduct = (newEvent: AppEvent) => {
  // Adding the new Event details here,we can add newEvent directly
  // but that will add a reference, while clearing the fields it will also clear dashboard
 this.eventArray.unshift({
  name: newEvent.name,
  date: newEvent.date,
  time: newEvent.time,
  venue: newEvent.venue
 });

 // Clean up the data in the text boxes
 newEvent.name = '';
 newEvent.date = '';
 newEvent.time = '';
 newEvent.venue = '';
}
  getStyle = () => {
    return {
      'background-color': 'lightblue',
      'margin-left': '10px',
      'width': '50%',
      'padding-bottom' : '2opx'
    };
  }

    getClass = () => {
      return 'margin10px';
    }

    getEventsList = () => {

if (!(this.eventArray && this.eventArray.length)) {
      this.eventArray = [
      {
        name: 'Angular Connect',
        date: '30 Mar 2018',
        time: '9:00 -19:00',
        venue: 'Hyderabad Telangana'
      },
      {
        name: 'ASP.Net Core Huddle Meet',
        date: '26 Mar 2018',
        time: '9:00 -18:00',
        venue: 'Scotland UK'
      },
       {
        name: 'Azure Cognitive Services Webinar',
        date: '25 Mar 2018',
        time: '11:00 -18:00',
        venue: 'Texas USA'
      },
      {
        name: 'IdentityServer4 Authentication Announcement',
        date: '24 Mar 2018',
        time: '10:00 -18:00',
        venue: 'London UK'
      }
    ];
  }
    return this.eventArray;
    }

    getChilData = () => {
      return {
        events : this.getEventsList(),
        angClass : this.getClass(),
        angStyle: this.getStyle()
      };
    }
}
