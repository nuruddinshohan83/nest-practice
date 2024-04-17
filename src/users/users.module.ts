import { Module } from '@nestjs/common';
import { UserController } from './users.controller';
import { userService } from './users.service';

@Module({
  controllers: [UserController],
  providers: [userService],
})
export class UserModule {}
