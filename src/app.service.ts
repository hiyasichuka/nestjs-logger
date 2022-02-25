import { Injectable, Logger } from '@nestjs/common';

@Injectable()
export class AppService {
  // Create a logger
  private readonly logger = new Logger(AppService.name);

  getHello(): string {
    this.logger.log('getHello');
    return 'Hello World!';
  }
}
