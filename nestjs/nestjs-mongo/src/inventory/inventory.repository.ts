import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { FilterQuery, Model } from "mongoose";
import { Inventory, InventoryDocument } from "./schemas/inventory.schema";
import { InwardInventoryDto } from './dto/create-inventory.dto'

@Injectable()
export class InventoryRepository {
    constructor(@InjectModel(Inventory.name) private userModel: Model<InventoryDocument>) {}
    async findOne(userFilterQuery): Promise<Inventory> {
        return this.userModel.findOne(userFilterQuery);
    }

    async find(usersFilterQuery): Promise<Inventory[]> {
        return this.userModel.find(usersFilterQuery)
    }

    async create(user: Inventory): Promise<Inventory> {
        const newUser = new this.userModel(user);
        return newUser.save()
    }

    async createInwarding(user: InwardInventoryDto): Promise<Inventory> {
        const newUser = new this.userModel(user);
        return newUser.save()
    }

    async findOneAndUpdate(userFilterQuery, user: Partial<Inventory>): Promise<Inventory> {
        return this.userModel.findOneAndUpdate(userFilterQuery, user, { new: true });
    }
}