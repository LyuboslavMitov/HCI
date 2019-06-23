import { Injectable } from '@angular/core';
import { Route } from '../models/route';
@Injectable({
  providedIn: 'root'
})
export class RouteService {

  routes: Route[] = [
    {
      id: 1,
      startPoint: "Sofia",
      endPoint: "Pazardzhik",
      stops: [],
      duration: "2h",
      price: 8,
      distance: "120km",
      company: "Union Ivkoni"
    },
    {
      id: 2,
      startPoint: "Vidin",
      endPoint: "Sofia",
      stops: ['Vratza'],
      duration: "3:30h",
      price: 18,
      distance: "240km",
      company: "Aleksiev"
    },
  ];
  getRoutes(): Route[] {
    return this.routes;
  }
  createRoute(newRoute: Route): void {
    this.routes.push(newRoute);
  }
  deleteRoute(route:Route) : Route[] {
     const index: number = this.routes.indexOf(route);
     if (index !== -1) {
      this.routes.splice(index, 1);
    }
    return this.routes;  
  }
  constructor() { }
}
