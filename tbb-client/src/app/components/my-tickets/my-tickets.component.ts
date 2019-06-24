import { Component, OnInit } from '@angular/core';
import { TICKETS } from './Tickets';
import { HttpClient } from '@angular/common/http';
import { Ticket } from 'src/app/models/ticket';

@Component({
  selector: 'app-my-tickets',
  templateUrl: './my-tickets.component.html',
  styleUrls: ['./my-tickets.component.css']
})
export class MyTicketsComponent implements OnInit {

  tickets = [];

  constructor(
    private http: HttpClient,
  ) { }

  ngOnInit() {
    return this.http.get<Ticket[]>(`http://localhost:3000/tickets`).subscribe(tickets => {
      this.tickets = tickets;
    });
  }

}
