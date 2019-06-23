export class BusLine {
    id?: number;
    startPoint: string;
    endPoint: string;
    stops: string[];
    duration: number;
    price: number;
    distance: number;
    company: string

    constructor(startPoint: string, endPoint: string, stops: string[],
        duration: number, price: number, distance: number, company: string) {
        this.startPoint = startPoint;
        this.endPoint = endPoint;
        this.duration = duration;
        this.price = price;
        this.company = company;

        for (let i = 0; i < stops.length; i++) {
            this.stops[i] = stops[i];
        }

    }
}