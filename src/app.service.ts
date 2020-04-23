import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello() {
    return 'Hello Micro service  the message ';
  }

  getRegister() {
    return 'Register method from the micro service ';
  }
}
