export class UpdateUserDto {
    firstName: string;
    lastName: string;
    email: string;
    mobileNo: number;
    password: string;
}


export class UpdateStatusDto {
    status: boolean;
}

export class UpdateStatusBody {
    status: boolean;
    email: string;
}

export class passwordDto {
    newPassword: string;
    oldPassword: string;
}

export class UpdatePasswordDto {
    password: string;
}