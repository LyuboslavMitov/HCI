import {
  SubscribeMessage,
  WebSocketGateway,
  OnGatewayInit,
  OnGatewayConnection,
  OnGatewayDisconnect,
  WebSocketServer,
} from '@nestjs/websockets';
import { Logger } from '@nestjs/common';
import { Socket, Server } from 'socket.io';
import Axios from 'axios';

// const KEY = 'kcyp7CvYLi2zfbun3qGpYnwu0SL2V9EA'
const KEY = 'ARIJV6zPAu9guYNgx5FG6XkK0iwYv9GN';

@WebSocketGateway(3001)
export class AppGateway
  implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect {
  @WebSocketServer() wss: Server;

  private logger: Logger = new Logger('AppGateway');

  public clients: any[] = [];

  private weather: any = {};

  constructor() {
    this.handleWeatherApi();
  }

  // https://developer.accuweather.com/sites/default/files/0${WeatherIcon}-s.png

  handleWeatherApi = async () => {
    try {
      this.weather = (await Axios.get(`http://dataservice.accuweather.com/forecasts/v1/hourly/1hour/51097?apikey=${KEY}&language=en-gb&details=true&metric=true`)).data[0];
      this.wss.emit('sendWeather', this.weather);
    } catch (error) {
      console.error(error);
    }

    setInterval(async () => {
      this.weather = (await Axios.get(`http://dataservice.accuweather.com/forecasts/v1/hourly/1hour/51097?apikey=${KEY}&language=en-gb&details=true&metric=true`)).data[0];
    }, 60 * 60 * 1000);

    setInterval(() => {
      const temperature = this.weather.Temperature;
      const delta = (Math.random() - 0.5) / 2;

      const newWeatherObject = { ...this.weather, Temperature: { ...temperature, Value: temperature.Value + delta } }
      this.wss.emit('sendWeather', newWeatherObject);
    }, 5 * 1000);
  }

  afterInit() {
    this.logger.log('Gateway is ready!');
  }

  handleConnection(client: Socket) {
    this.logger.log(`Connected client with id ${client.id}`);
    this.clients.push(client);
    this.wss.emit('sendWeather', this.weather);
  }

  handleDisconnect(client: Socket) {
    this.logger.log(`Disconnected client with id ${client.id}`);
    this.clients = this.clients.filter(cl => cl.id !== client.id);
  }

  @SubscribeMessage('getWeather')
  handleBorrowRequest(client: Socket, message: any): void {
    this.wss.emit('sendWeather', this.weather);
  }
}
