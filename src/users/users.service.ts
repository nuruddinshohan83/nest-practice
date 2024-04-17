import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/user-create.dto';

@Injectable()
export class userService {
  getUser() {
    return 'hello user';
  }
  getUserById(params) {
    return params;
  }
  createUserById(createUserDTO: CreateUserDto, params: { userId: number }) {
    return { ...createUserDTO, id: params.userId };
  }
}
