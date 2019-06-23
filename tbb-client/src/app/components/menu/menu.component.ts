import { COMPANY, TRAVELER } from './../../common/constants';
import { AuthService } from './../../core/auth.service';
import { Component, OnInit, OnChanges } from '@angular/core';
import { Router } from '@angular/router';
import { ILink, guestLinks, companyLinks, travelerLinks } from 'src/app/common/menu-links';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit, OnChanges {
  links: ILink[] = guestLinks;
  userRole = null;

  constructor(
    private router: Router,
    private authService: AuthService,
  ) { }

  ngOnInit() {
    this.userRole = this.authService.getUserRole();
    this.setLinks();
  }

  ngOnChanges() {
    this.userRole = this.authService.getUserRole();
    this.setLinks();
  }

  logout() {
    this.authService.logout();
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
