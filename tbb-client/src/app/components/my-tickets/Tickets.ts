import { Ticket } from 'src/app/models/ticket';

export const TICKETS: Ticket[] = [{
    id: 1, startPoint: "Sofia", endPoint: "Bougras", stops: [],
    duration: "6h", price: 30, distance: "400km", company: "Union Ivkoni", date: '24-06-2019, 9:00:00'
},
{
    id: 2, startPoint: "Vidin", endPoint: "Sofia", stops: [],
    duration: "4h", price: 20, distance: "210km", company: "Union Ivkoni", date: '23-06-2019, 9:00:00'
},
{
    id: 3, startPoint: "Sofia", endPoint: "Plovdiv", stops: [],
    duration: "3h", price: 15, distance: "105km", company: "Union Ivkoni", date: '24-05-2019, 9:00:00'
},
{
    id: 4, startPoint: "Plovdiv", endPoint: "Sofia", stops: [],
    duration: "3h", price: 15, distance: "105km", company: "Union Ivkoni", date: '26-05-2019, 9:00:00'
}];