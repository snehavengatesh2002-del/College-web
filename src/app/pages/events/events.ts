import { Component } from '@angular/core';

@Component({
  selector: 'app-events',
  templateUrl: './events.html',
  styleUrl: './events.css',
})
export class Events {
  events = [
    { day: '02', month: 'Dec', title: 'Annual Science Exhibition', place: 'Main Auditorium', time: '10:00 AM' },
    { day: '10', month: 'Dec', title: 'Inter-college Debate', place: 'Seminar Hall', time: '2:00 PM' },
    { day: '20', month: 'Dec', title: 'Winter Cultural Fest', place: 'Open Ground', time: '5:00 PM' },
    { day: '14', month: 'Jan', title: 'Career Guidance Workshop', place: 'Room 204', time: '11:00 AM' },
  ];
}
