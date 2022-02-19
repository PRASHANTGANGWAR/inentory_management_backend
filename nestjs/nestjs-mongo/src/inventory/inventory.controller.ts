import { Body, Controller, Get, Param, Patch, Post, UploadedFiles, UploadedFile, UseInterceptors } from '@nestjs/common';
import { CreateInventoryDto } from './dto/create-inventory.dto';
import { UpdateInventoryDto } from './dto/update-inventory.dto';

import { Inventory } from './schemas/inventory.schema';
import { InventoryService } from './inventory.service';
import { FileInterceptor } from '@nestjs/platform-express';


@Controller('inventory')
export class InventoryController {
  constructor(private readonly inventoryService: InventoryService) { }

  @Get(':inventoryId')
  async getInventory(@Param('inventoryId') inventoryId: string): Promise<Inventory> {
    console.log("------------here", inventoryId)
    return this.inventoryService.getInventoryById(inventoryId);
  }

  @Get()
  async getUsers(): Promise<Inventory[]> {
    return this.inventoryService.getInventory();
  }

  @Post()
  async createUser(@Body() createInventoryDto: CreateInventoryDto): Promise<Inventory> {
    return this.inventoryService.createInventory(createInventoryDto.clientId, createInventoryDto.originalSealId, createInventoryDto.currentSealId, createInventoryDto.coinCount, createInventoryDto.sealStatus, createInventoryDto.currentCoinCount, createInventoryDto.previousSealId, createInventoryDto.previousCoinCount, createInventoryDto.initialSetup, createInventoryDto.documentPath)
  }

  @Patch(':inventoryId')
  async updateUser(@Param('inventoryId') inventoryId: string, @Body() UpdateInventoryDto: UpdateInventoryDto): Promise<Inventory> {
    console.log("=========here inventorys", inventoryId, UpdateInventoryDto)
    return this.inventoryService.updateInventory(inventoryId, UpdateInventoryDto);
  }

  @Post('upload')
  @UseInterceptors(FileInterceptor('file', {
    dest: './files'
  })
  )

  async uploadFile(
    @UploadedFile() file) {
    console.log(file, "=======");
  }
}
