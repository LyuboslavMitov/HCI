import { Component, OnInit } from '@angular/core';
import { CompanyService } from '../../services/company.service';
import { Ticket } from 'src/app/models/ticket';

@Component({
  selector: 'app-my-tickets',
  templateUrl: './my-tickets.component.html',
  styleUrls: ['./my-tickets.component.css']
})
export class MyTicketsComponent implements OnInit {

  tickets = [];

  constructor(
    private service: CompanyService
  ) { }

  ngOnInit() {
    return this.service.getTickets().subscribe(tickets => {
      this.tickets = tickets;
    });
  }

}
