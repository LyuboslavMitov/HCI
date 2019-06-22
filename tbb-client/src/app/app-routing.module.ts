import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { CompanyLinesComponent } from './components/company-lines/company-lines.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  { path: 'home', component: AppComponent },
  { path: 'lines', component: CompanyLinesComponent},
  { path: 'login', component: LoginComponent },
  { path: '', component: HomePageComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
