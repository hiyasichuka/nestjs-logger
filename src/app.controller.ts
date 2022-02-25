import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { Greeting } from './response/Greeting';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/hello')
  getHello(): Greeting {
    const greeting: Greeting = new Greeting();
    greeting.message = this.appService.getHello();
    return greeting;
  }
}
