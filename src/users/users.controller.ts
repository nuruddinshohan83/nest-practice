import { Body, Controller, Get, Param, Post, Req } from '@nestjs/common';
import { Request } from 'express';
import { userService } from './users.service';

import { CreateUserDto } from './dto/user-create.dto';

@Controller('/user')
export class UserController {
  constructor(private userService: userService) {}
  @Get()
  getUser() {
    return this.userService.getUser();
  }
  @Get('/:userId')
  getUserById(@Param() params: { userId: number }) {
    return this.userService.getUserById(params);
  }
  @Post('/:userId')
  createUserById(
    @Body() createUserDTO: CreateUserDto,
    @Param() params: { userId: number },
  ) {
    return this.userService.createUserById(createUserDTO, params);
  }
}
