import { Component, OnInit } from '@angular/core';
import { BusLine } from 'src/app/models/BusLine';
import { CompanyService } from 'src/app/services/company.service';
import { HttpClient } from '@angular/common/http';
import { NotificationService } from 'src/app/core/notification.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-route',
  templateUrl: './search-route.component.html',
  styleUrls: ['./search-route.component.css']
})
export class SearchRouteComponent implements OnInit {
  companyLines: BusLine[];

  cities: string[] = ["Sofia",
    "St Zagora",
    "Plovdiv",
    "Varna",
    "Vidin",
    "Ruse",
    "Bourgas",
    "Pazardzhik",]

  defaultOption = 'Sofia';

  sortOptions: string[] = ["Duration", "Price", "Distance"]
  startPoint: string = this.defaultOption;
  endPoint: string = this.defaultOption;
  sortBy: string;

  buttonText: string = "Buy ticket";

  constructor(
    private service: CompanyService,
    private http: HttpClient,
    private notificator: NotificationService,
    private router: Router,
  ) { }

  ngOnInit() {
    this.getLines();
  }
  buyTicket(event: any) {
    const ticket = {
      ...event,
      date: Date.now(),
      duration: `${event.duration}`
    };

    this.service.addTicket(ticket).subscribe(() => {
      this.notificator.success('A ticket was successfully bought!');
      this.router.navigate(['/tickets']);
    });
  }
  changeStartingPoint(event: any) {
    this.startPoint = event.value;
  }
  changeEndPoint(event: any) {
    this.endPoint = event.value;
  }
  changeSortOption(event: any) {
    this.sortBy = event.value;
  }
  private getLines() {
    this.service.getLines().subscribe(res => {
      this.companyLines = res;
    });
  }
  filter() {
    this.getLines();
    this.companyLines = this.companyLines.filter(l => l.startPoint === this.startPoint && l.endPoint === this.endPoint);
    switch (this.sortBy) {
      case "Duration": this.companyLines.sort((a, b) => a.duration - b.duration); break;
      case "Price": this.companyLines.sort((a, b) => a.price - b.price); break;
      case "Distance": this.companyLines.sort((a, b) => a.distance - b.distance); break;
      default: break;
    }
  }
}
