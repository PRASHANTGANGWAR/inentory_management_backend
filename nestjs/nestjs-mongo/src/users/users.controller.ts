import { Body, Controller, Get, HttpCode, Param, Patch, Post, Res } from '@nestjs/common';
import { CreateUserDto, loginUserDto } from './dto/create-user.dto';
import { UpdateUserDto, passwordDto, UpdateStatusDto, UpdatePasswordDto, UpdateStatusBody } from './dto/update-user.dto';

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

  @HttpCode(200)
  @Post()
  async createUser(@Body() createUserDto: CreateUserDto): Promise<User> {
    return this.usersService.createUser(createUserDto.firstName, createUserDto.lastName, createUserDto.email, createUserDto.empId, createUserDto.mobileNo )
  }

  @HttpCode(200)
  @Post('login')
  async loginUser(@Body() loginUserDto: loginUserDto): Promise<any> {
    console.log(loginUserDto, "loginUserDto")
    const user = await this.usersService.getUserByEmail(loginUserDto.email);
    console.log(user, "======user ")
    if(user && loginUserDto.password == user.password){
      // create token
      console.log("Logged In Successfully")
      return { message: "Logged In Successfully", success: true};
    } else {
      console.log("Invalid Credentials")
      return { message: "Invalid Credentials", success: false};
    }
  }

  @Patch(':userId')
  async updateUser(@Param('userId') userId: string, @Body() UpdateUserDto: UpdateUserDto): Promise<User> {
      return this.usersService.updateUser(userId, UpdateUserDto);
  }

  @HttpCode(200)
  @Post('/update-status')
  async updateUserStatus(@Body() UpdateStatusBody: UpdateStatusBody): Promise<User> {
      console.log(UpdateStatusBody, "UpdateStatusDto");
      return this.usersService.updateUserStatus(UpdateStatusBody.email, {status: UpdateStatusBody.status});
  }

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
