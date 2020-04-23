import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { Logger } from '@nestjs/common';

import { UserService } from '../shared/user.service';
import { AuthService } from './auth.service';

@Controller()
export class AuthController {
  constructor(
    private userService: UserService,
    private authService: AuthService,
  ) {}

  // @UseGuards(LocalAuthGuard)
  @MessagePattern('login')
  async login(@Payload() userDTO: any) {
    const user = await this.userService.findByLogin(userDTO);
    const payload: any = {
      username: user.username,
      seller: user.seller,
    };
    const token = await this.authService.sign(payload);
    return { user, token };
  }

  @MessagePattern('register')
  async register(userDTO: any) {
    Logger.log(userDTO.username);
    const user = await this.userService.create(userDTO);
    const payload: any = {
      username: user.username,
      seller: user.seller,
    };
    const token = await this.authService.sign(payload);
    return { user, token };
  }
}
