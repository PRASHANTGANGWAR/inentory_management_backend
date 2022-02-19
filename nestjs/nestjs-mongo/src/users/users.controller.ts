import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto, UpdateStatusDto, UpdatePasswordDto, passwordDto } from './dto/update-user.dto';

import { User } from './schemas/user.schema';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get(':userId')
  async getUser(@Param('userId') userId: string): Promise<User> {
    return this.usersService.getUserById(userId);
  }

  @Get()
  async getUsers(): Promise<User[]> {
    return this.usersService.getUsers();
  }

  @Post()
  async createUser(@Body() createUserDto: CreateUserDto): Promise<User> {
    return this.usersService.createUser(createUserDto.firstName, createUserDto.lastName, createUserDto.email, createUserDto.empId, createUserDto.mobileNo, 'test@123', false )
  }

  @Patch(':userId')
  async updateUser(@Param('userId') userId: string, @Body() UpdateUserDto: UpdateUserDto): Promise<User> {
      return this.usersService.updateUser(userId, UpdateUserDto);
  }

  // @Patch('/update-status/:userId')
  // async updateUserStatus(@Param('userId') userId: string, @Body() UpdatePasswordDto: UpdatePasswordDto): Promise<User> {
  //     return this.usersService.updateUserStatus(userId, UpdatePasswordDto);
  // }

  @Patch('/update-password/:userId')
  async updateUserPassword(@Param('userId') userId: string, @Body() passwordDto: passwordDto): Promise<object> {
      console.log(passwordDto, "passwordDto");
      const user = await this.usersService.getUserById(userId);
      console.log("user", user.password);
      if(passwordDto.oldPassword == user.password){
        this.usersService.updatePassword(userId, {password: passwordDto.newPassword});
        return { message: "updated", success: true};
      } else {
        return { message: "Old assword mismatch", success: false};
      }
  }
}
