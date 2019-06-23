import { COMPANY, TRAVELER } from './../../common/constants';
import { AuthService } from './../../core/auth.service';
import { Component, OnInit, OnChanges, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { ILink, guestLinks, companyLinks, travelerLinks } from 'src/app/common/menu-links';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit, OnDestroy {
  links: ILink[] = guestLinks;
  userRoleSubscription: Subscription;
  userRole = '';

  constructor(
    private router: Router,
    private authService: AuthService,
  ) { }

  ngOnInit() {
    this.userRoleSubscription = this.authService.userRole$.subscribe(role => {
      this.userRole = role;
      this.setLinks();
    });
  }

  ngOnDestroy() {
    this.userRoleSubscription.unsubscribe();
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
