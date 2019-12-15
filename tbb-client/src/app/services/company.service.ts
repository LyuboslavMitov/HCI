import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { BusLine } from '../models/BusLine';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Ticket } from '../models/ticket';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {
  // private lines: BusLine[] = [
  //   { startPoint: 'Pleven', endPoint: 'Ruse', stops: [''], duration: 2, price: 10, distance: 148, company: 'Aleksiev' },
  //   { startPoint: 'Sofia', endPoint: 'Varna', stops: ['St. Zagora'], duration: 6, price: 30, distance: 400, company: 'Aleksiev' },
  //   { startPoint: 'Sofia', endPoint: 'Varna', stops: ['St. Zagora'], duration: 6, price: 30, distance: 400, company: 'Aleksiev' },
  //   { startPoint: 'Vidin', endPoint: 'Sofia', stops: ['Vratza'], duration: 4, price: 18, distance: 210, company: 'Aleksiev' }
  // ]

  private routesUrl = "http://localhost:8080/api/routes"
  private ticketsUrl = "http://localhost:8080/api/tickets"

  constructor(private http: HttpClient) 
  { }

  // Get line
  getLine(id: number): Observable<BusLine[]> {
    return this.http.Get<BusLine>(this.routesUrl + "/" + id)
  }

   // Get all lines
  getLines(): Observable<BusLine[]> {
    return this.http.Get<BusLine[]>(this.routesUrl)
  }

  // Post Line
  addLine(newLine: BusLine) {
    return this.http.Post<any>(this.routesUrl, newLine)
  }

  // Delete Line
  removeLine(line: BusLine) {
    return this.http.Delete<any>(this.routesUrl + "/" + line.id)
  }

  // Get ticket
  getTicket(ticket: Ticket) {
    return this.http.Get<Ticket>(this.ticketsUrl + "/" + ticket.id)
  }
  // Get all tickets
  getTickets() {
    return this.http.Get<Ticket[]>(this.ticketsUrl)
  }

  // Post ticket
  addTicket(ticket: Ticket) {
    return this.http.Post<any>(this.ticketsUrl + "/" + ticket)
  }

  // Delete ticket
  deleteTicket(ticket: Ticket) {
    return this.http.Delete<any>(this.ticketsUrl + "/" + ticket.id)
  }
}
