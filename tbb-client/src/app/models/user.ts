import { Ticket } from './ticket';

export interface User {
    id:number;
    username: string;
    password: string;
    role: string;
    email?:string;
    tickets?: Ticket[];
}