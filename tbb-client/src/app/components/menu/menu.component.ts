import { COMPANY, TRAVELER } from './../../common/constants';
import { AuthService } from './../../core/auth.service';
import { Component, OnInit, OnChanges, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { ILink, guestLinks, companyLinks, travelerLinks } from 'src/app/common/menu-links';
import { Subscription } from 'rxjs';
import { NotificationService } from 'src/app/core/notification.service';
import { Socket } from 'ngx-socket-io';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit, OnDestroy {
  links: ILink[] = guestLinks;
  userRoleSubscription: Subscription;
  userRole = '';
  weatherDetails: any = { Temperature: { Value: 2.3 } };
  weatherIcon  = `https://developer.accuweather.com/sites/default/files/38-s.png`;

  constructor(
    private router: Router,
    private authService: AuthService,
    private notificator: NotificationService,
    private socket: Socket
  ) { }

  ngOnInit() {
    this.userRoleSubscription = this.authService.userRole$.subscribe(role => {
      this.userRole = role;
      this.setLinks();
    });

    this.socket.on('sendWeather', ({ WeatherIcon, ...weatherDetails }) => {
      this.weatherDetails = weatherDetails;
      const weatherIconNumber = WeatherIcon < 10 ? `0${WeatherIcon}` : `${WeatherIcon}`;
      this.weatherIcon = `https://developer.accuweather.com/sites/default/files/${weatherIconNumber}-s.png`;
    })
  }

  ngOnDestroy() {
    this.userRoleSubscription.unsubscribe();
  }

  logout() {
    this.authService.logout();
    this.notificator.success('Successful logout!');
    this.router.navigate(['/']);
  }

  private setLinks() {
    switch (this.userRole) {
      case COMPANY:
        this.links = companyLinks;
        return;
      case TRAVELER:
        this.links = travelerLinks;
        return;
      default:
        this.links = guestLinks;
    }
  }
}
