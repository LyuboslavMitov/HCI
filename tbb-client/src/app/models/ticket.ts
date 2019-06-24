export interface Ticket {
    id: number;
    startPoint: string;
    endPoint: string;
    stops: string[];
    duration: string;
    price: number;
    distance: string;
    company: string;
    date: string;
    userId?: string;
}