import { Body, Controller, Get, Param, Patch, Post, UploadedFiles, UploadedFile, UseInterceptors, HttpCode } from '@nestjs/common';
import { CreateInventoryDto, InwardInventoryDto, ReqInwardingInventoryDto } from './dto/create-inventory.dto';
import { UpdateInventoryDto, clientDetails } from './dto/update-inventory.dto';

import { Inventory } from './schemas/inventory.schema';
import { InventoryService } from './inventory.service';
import { FileInterceptor, MulterModule} from '@nestjs/platform-express';
import { Seals } from './dto/fetch-inventory.dto'

@Controller('inventory')
export class InventoryController {
  constructor(private readonly inventoryService: InventoryService) { }

  @Get(':inventoryId')
  async getInventoryById(@Param('inventoryId') inventoryId: string): Promise<Inventory> {
    console.log("------------here", inventoryId)
    return this.inventoryService.getInventoryById(inventoryId);
  }

  @Get()
  async getInventory(): Promise<Inventory[]> {
    return this.inventoryService.getInventory();
  }
  
  @HttpCode(200)
  @Post('inwarding')
  async createInventory(@Body() inwardInventoryDto: ReqInwardingInventoryDto): Promise<Inventory> {
    console.log(inwardInventoryDto, "inwardInventoryDto")
    // { clientId: 1, currentSealId: 'test', weight: '100', noOfCoin: '100' } createInventoryDto
    return this.inventoryService.createInventory(inwardInventoryDto.clientId, inwardInventoryDto.currentSealId, inwardInventoryDto.currentSealId, inwardInventoryDto.noOfCoin, inwardInventoryDto.noOfCoin, inwardInventoryDto.documentPath)
  }

  @Patch(':inventoryId')
  async updateInventory(@Param('inventoryId') inventoryId: string, @Body() UpdateInventoryDto: UpdateInventoryDto): Promise<Inventory> {
    console.log("=========here inventorys", inventoryId, UpdateInventoryDto)
    return this.inventoryService.updateInventory(inventoryId, UpdateInventoryDto);
  }

  @Post('inventoryDetails')
  async getInventoryDetailByClientId(@Body() clientDetails: clientDetails): Promise<Inventory[]> {
    console.log("getInventoryDetailByClientId", clientDetails);
    return this.inventoryService.getInventoryDetailByClientId(clientDetails.clientId);
  }

  @Get('/seals/:clientId')
  async getAllSeals(@Param('clientId') clientId: string): Promise<Inventory[]> {
    console.log("getAllSeals", clientId);
    return this.inventoryService.getAllSeals(clientId);
  }

  @Post('upload')
  @UseInterceptors(FileInterceptor('file', {
    dest: './files'
  })
  )

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
