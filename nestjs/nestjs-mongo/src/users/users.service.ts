import { Injectable } from "@nestjs/common";
import { v4 as uuidv4 } from 'uuid';
import { UpdateUserDto, UpdatePasswordDto } from "./dto/update-user.dto";
import { User } from "./schemas/user.schema";
import { UsersRepository } from "./users.repository";
@Injectable()
export class UsersService {
    constructor(private readonly usersRepository: UsersRepository) {}
    async getUserById(userId: string): Promise<User> {
        return this.usersRepository.findOne({ userId })
    }
    async getUsers(): Promise<User[]> {
        return this.usersRepository.find({});
    }
    async createUser(firstName: string, lastName: string, email: string, empId: string, mobileNo: number, password: string, status:boolean): Promise<User> {
        return this.usersRepository.create({
            userId: uuidv4(),
            firstName,
            lastName,
            email,
            empId,
            mobileNo,
            password,
            status
        })
    }
    async updateUser(userId: string, userUpdates: UpdateUserDto): Promise<User> {
        return this.usersRepository.findOneAndUpdate({ userId }, userUpdates);
    }

    async updatePassword(userId: string, UpdatePasswordDto: UpdatePasswordDto): Promise<User> {
        return this.usersRepository.findOneAndUpdate({ userId }, UpdatePasswordDto);
    }

    // async updateUserStatus(userId: string, userUpdates: UpdatePasswordDto): Promise<User> {
    //     return this.usersRepository.findOneAndUpdate({ userId }, userUpdates);
    // }
  
}