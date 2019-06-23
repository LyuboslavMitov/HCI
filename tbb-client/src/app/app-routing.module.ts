import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { CompanyLinesComponent } from './components/company-lines/company-lines.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { LoginComponent } from './components/login/login.component';
import { MyTicketsComponent } from './components/my-tickets/my-tickets.component';
import { ProfileComponent } from './components/profile/profile.component';

const routes: Routes = [
  { path: 'home', component: AppComponent },
  { path: 'lines', component: CompanyLinesComponent},
  { path: 'login', component: LoginComponent },
  { path: 'tickets', component: MyTicketsComponent },
  { path: 'profile', component: ProfileComponent },
  { path: '', component: HomePageComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
