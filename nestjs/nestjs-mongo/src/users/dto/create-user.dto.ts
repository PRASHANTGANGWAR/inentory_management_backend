// import { ApiProperty } from '@nestjs/swagger';
export class CreateUserDto {
    // @ApiProperty()
    firstName: string;
    lastName: string;
    email: string;
    empId: string;
    mobileNo: number;
    password: string;
    status: boolean
}