import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CompanyLinesComponent } from './components/company-lines/company-lines.component';
import { MenuComponent } from './components/menu/menu.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { LoginComponent } from './components/login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './material/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MyTicketsComponent } from './components/my-tickets/my-tickets.component';
import { ProfileComponent } from './components/profile/profile.component';
import { CoreModule } from './core/core.module';
import { HttpClientModule } from '@angular/common/http';
import { SearchRouteComponent } from './components/search-route/search-route.component';
import { ExistingLinesComponent } from './components/company-lines/existing-lines/existing-lines.component';
import { FlexLayoutModule } from "@angular/flex-layout";
import { TicketComponent } from './components/my-tickets/ticket/ticket.component';

@NgModule({
  declarations: [
    AppComponent,
    CompanyLinesComponent,
    MenuComponent,
    HomePageComponent,
    LoginComponent,
    MyTicketsComponent,
    ProfileComponent,
    SearchRouteComponent,
    ExistingLinesComponent,
    TicketComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    HttpClientModule,
    ReactiveFormsModule,
    MaterialModule,
    BrowserAnimationsModule,
    FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
