
import { Injectable } from "@nestjs/common";
import { v4 as uuidv4 } from 'uuid';
import { UpdateInventoryDto, UpdatePasswordDto } from "./dto/update-inventory.dto";
import { Inventory } from "./schemas/inventory.schema";
import { InventoryRepository } from "./inventory.repository";
import { redemptionStatusEnum, sealStatus } from "src/app.properties";
import { Express } from 'express';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { CreateInventoryDto } from './dto/create-inventory.dto'
import { Seals } from './dto/fetch-inventory.dto'

@Injectable()
// @UseInterceptors(FileInterceptor('file'))

export class InventoryService {
    constructor(private readonly inventoryRepository: InventoryRepository) {}
    async getInventoryById(inventoryId: string): Promise<Inventory> {
        return this.inventoryRepository.findOne({ inventoryId })
    }
    async getInventory(): Promise<Inventory[]> {
        return this.inventoryRepository.find({redemptionStatus: redemptionStatusEnum.FRESH });
    }
    async createInventory(
        clientId,
        originalSealId,
        currentSealId,
        currentCoinCount,
        originalCoinCount,
        documentPath): Promise<Inventory> {
        return this.inventoryRepository.createInwarding({
            inventoryId: uuidv4(),
            clientId,
            originalSealId,
            currentSealId,
            originalCoinCount,
            currentCoinCount,
            documentPath
        })
    }
// noOfCoin : purane - new count

    async updateOutWrdingInventory(
        currentSealId,
        remainingCoin,
        selectSeal
        ): Promise<Inventory> {
        return this.inventoryRepository.findOneAndUpdate({  inventoryId: selectSeal }, { redemptionStatus: true });
    }

    async createAltredSealData(clientId,
        originalSealId,
        currentSealId,
        previousSealId,
        currentCoinCount,
        originalCoinCount,
        previousCoinCount,
        documentPath): Promise<Inventory> {
            const sealStatus = true //  
        return this.inventoryRepository.createAltredSealData({
            inventoryId: uuidv4(),
            clientId,
            originalSealId,
            currentSealId,
            currentCoinCount,
            originalCoinCount,
            previousSealId,
            previousCoinCount,
            documentPath,
            sealStatus
        })
    }

    async updateInventory(inventoryId: string, inventoryUpdates: UpdateInventoryDto): Promise<Inventory> {
        return this.inventoryRepository.findOneAndUpdate({ inventoryId }, inventoryUpdates);
    }

    
    async getInventoryDetailByClientId(clientId): Promise<Inventory[]> {
        return this.inventoryRepository.find({clientId: clientId, redemptionStatus: redemptionStatusEnum.ATLERED, sealStatus: sealStatus.NEW });
    }

    async getAllSeals(clientId): Promise<Inventory[]> {
        return this.inventoryRepository.find({clientId: clientId, redemptionStatus: redemptionStatusEnum.FRESH });
    }

    
    // async updatePassword(userId: string, UpdatePasswordDto: UpdatePasswordDto): Promise<User> {
    //     return this.inventoryRepository.findOneAndUpdate({ userId }, UpdatePasswordDto);
    // }

    // async updateUserStatus(userId: string, userUpdates: UpdatePasswordDto): Promise<User> {
    //     return this.inventoryRepository.findOneAndUpdate({ userId }, userUpdates);
    // }
  
}










