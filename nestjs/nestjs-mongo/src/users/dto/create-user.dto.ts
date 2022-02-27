// import { ApiProperty } from '@nestjs/swagger';
export class CreateUserDto {
    // @ApiProperty()
    userId: string;
    firstName: string;
    lastName: string;
    email: string;
    mobileNo: number;
}
export class loginUserDto {
    email: string;
    password: string;
}
