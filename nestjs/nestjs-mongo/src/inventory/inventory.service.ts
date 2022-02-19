
import { Injectable } from "@nestjs/common";
import { v4 as uuidv4 } from 'uuid';
import { UpdateInventoryDto, UpdatePasswordDto } from "./dto/update-inventory.dto";
import { Inventory } from "./schemas/inventory.schema";
import { InventoryRepository } from "./inventory.repository";

import { Express } from 'express';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';

@Injectable()
// @UseInterceptors(FileInterceptor('file'))

export class InventoryService {
    constructor(private readonly inventoryRepository: InventoryRepository) {}
    async getInventoryById(inventoryId: string): Promise<Inventory> {
        return this.inventoryRepository.findOne({ inventoryId })
    }
    async getInventory(): Promise<Inventory[]> {
        return this.inventoryRepository.find({});
    }
    async createInventory(clientId, originalSealId,
        currentSealId,
        coinCount,
        sealStatus,
        currentCoinCount,
        previousSealId,
        previousCoinCount,
        initialSetup,
        documentPath): Promise<Inventory> {
        return this.inventoryRepository.create({
            inventoryId: uuidv4(),
            clientId,
            originalSealId,
            currentSealId,
            coinCount,
            sealStatus,
            currentCoinCount,
            previousSealId,
            previousCoinCount,
            initialSetup,
            documentPath

        })
    }
    async updateInventory(inventoryId: string, invwntoryUpdates: UpdateInventoryDto): Promise<Inventory> {
        return this.inventoryRepository.findOneAndUpdate({ inventoryId }, invwntoryUpdates);
    }

    // async updatePassword(userId: string, UpdatePasswordDto: UpdatePasswordDto): Promise<User> {
    //     return this.inventoryRepository.findOneAndUpdate({ userId }, UpdatePasswordDto);
    // }

    // async updateUserStatus(userId: string, userUpdates: UpdatePasswordDto): Promise<User> {
    //     return this.inventoryRepository.findOneAndUpdate({ userId }, userUpdates);
    // }
  
}










