import { Component, OnInit } from '@angular/core';
import { TICKETS } from './Tickets';

@Component({
  selector: 'app-my-tickets',
  templateUrl: './my-tickets.component.html',
  styleUrls: ['./my-tickets.component.css']
})
export class MyTicketsComponent implements OnInit {

  tickets = TICKETS;

  constructor() { }

  ngOnInit() {
  }

}
