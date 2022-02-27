import { Injectable } from "@nestjs/common";
import { v4 as uuidv4 } from 'uuid';
import { UpdateUserDto, UpdatePasswordDto, UpdateStatusDto } from "./dto/update-user.dto";
import { User } from "./schemas/user.schema";
import { UsersRepository } from "./users.repository";
@Injectable()
export class UsersService {
    constructor(private readonly usersRepository: UsersRepository) {}
    async getUserById(userId: string): Promise<User> {
        return this.usersRepository.findOne({ userId })
    }

    async getUserByEmail(email: string): Promise<User> {
        return this.usersRepository.findOne({ email })
    }

    async getUsers(): Promise<User[]> {
        return this.usersRepository.find({});
    }
    async createUser(firstName: string, lastName: string, email: string, mobileNo: number): Promise<User> {
        return this.usersRepository.create({
            userId: uuidv4(),
            firstName,
            lastName,
            email,
            mobileNo
        })
    }
    async updateUser(userId: string, userUpdates: UpdateUserDto): Promise<User> {
        return this.usersRepository.findOneAndUpdate({ userId }, userUpdates);
    }

    async updatePassword(userId: string, UpdatePasswordDto: UpdatePasswordDto): Promise<User> {
        return this.usersRepository.findOneAndUpdate({ userId }, UpdatePasswordDto);
    }

    async updateUserStatus(email: string, UpdateStatusDto: UpdateStatusDto): Promise<User> {
        return this.usersRepository.findOneAndUpdate({ email }, UpdateStatusDto);
    }
  
}