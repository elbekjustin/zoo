import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

// localhost:3000
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

// localhost:3000
  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

// localhost:3000/detail
  @Get("detail")
  public getDetail(): string {
    return this.appService.getDetail();
  }
}
