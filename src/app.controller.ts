import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { randomString } from '../index';

@Controller()
export class AppController {
  static get randomString(): string {
    let result = '';
    const characters =
      'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }

  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    const start = Date.now();
    while (Date.now() - start < 10000) {}
    return this.appService.getHello();
  }

  @Get('/env')
  getEnv(): string {
    return randomString;
  }
}
