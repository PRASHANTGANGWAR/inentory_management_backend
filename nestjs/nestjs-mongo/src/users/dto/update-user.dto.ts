export class UpdateUserDto {
    firstName: string;
    lastName: string;
    email: string;
    empId: string;
    mobileNo: number;
    password: string;
}


export class UpdateStatusDto {
    status: boolean;
}

export class passwordDto {
    newPassword: string;
    oldPassword: string;
}

export class UpdatePasswordDto {
    password: string;
}