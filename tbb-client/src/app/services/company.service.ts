import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { BusLine } from '../models/BusLine';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {
  private lines: BusLine[] = [
    { startPoint: 'Sofia', endPoint: 'Varna', stops: ['St. Zagora'], duration: 6, price: 30, distance: 400, company: 'Aleksiev' },
    { startPoint: 'Pleven', endPoint: 'Ruse', stops: [''], duration: 2, price: 10, distance: 148, company: 'Aleksiev' },
    { startPoint: 'Sofia', endPoint: 'Varna', stops: ['St. Zagora'], duration: 6, price: 30, distance: 400, company: 'Aleksiev' },
    { startPoint: 'Sofia', endPoint: 'Varna', stops: ['St. Zagora'], duration: 6, price: 30, distance: 400, company: 'Aleksiev' },
    { startPoint: 'Vidin', endPoint: 'Sofia', stops: ['Vratza'], duration: 4, price: 18, distance: 210, company: 'Aleksiev' }
  ]

  constructor() { }

  getLines(): Observable<BusLine[]> {
    return of(this.lines);
  }

  addLine(newLine: BusLine) {
    this.lines.push(newLine);
  }
}
