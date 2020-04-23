import { Controller } from '@nestjs/common';
import { AppService } from './app.service';
import { MessagePattern } from '@nestjs/microservices';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @MessagePattern('login')
  getHello() {
    return this.appService.getHello();
  }

  @MessagePattern('register')
  getRegister() {
    return this.appService.getRegister();
  }
}
