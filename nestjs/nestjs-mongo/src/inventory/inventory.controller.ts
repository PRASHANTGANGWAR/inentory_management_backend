import { Body, Controller, Get, Param, Patch, Post, UploadedFiles, UploadedFile, UseInterceptors, HttpCode, HttpException } from '@nestjs/common';
import { CreateInventoryDto, InwardInventoryDto, OutwardingInventoryDto, ReqInwardingInventoryDto } from './dto/create-inventory.dto';
import { UpdateInventoryDto, clientDetails } from './dto/update-inventory.dto';

import { Inventory } from './schemas/inventory.schema';
import { InventoryService } from './inventory.service';
import { FileInterceptor, MulterModule } from '@nestjs/platform-express';
import { Seals } from './dto/fetch-inventory.dto'
import { UploadService } from './../upload/upload.service';
import { status_code } from 'src/app.properties';

@Controller('inventory')
export class InventoryController {
  private readonly uploadService: UploadService;

  constructor(private readonly inventoryService: InventoryService, uploadService: UploadService) {
    this.uploadService = uploadService
  }

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
  @UseInterceptors(FileInterceptor('file'))
  async createInventory(@UploadedFile() file, @Body() inwardInventoryDto: ReqInwardingInventoryDto): Promise<any> {
    console.log(inwardInventoryDto, "inwardInventoryDto")
    let UploadedFile = await this.uploadService.uploadFile(file.buffer, file.filename, file.originalname, "upload/get-file", file.length, file.originalname.split('.').pop());
    if (UploadedFile) {
      console.log('uploaded successfully', UploadedFile)
    } else {
      return { message: 'File Uploaded failed ', success: false };
    }
    // { clientId: 1, currentSealId: 'test', weight: '100', noOfCoin: '100' } createInventoryDto
    return this.inventoryService.createInventory(inwardInventoryDto.clientId, inwardInventoryDto.currentSealId, inwardInventoryDto.currentSealId, inwardInventoryDto.noOfCoin, inwardInventoryDto.noOfCoin, UploadedFile.key + UploadedFile.extension);
  }


  @HttpCode(200)
  @Post('outwarding')
  async outwardInventory(@Body() outwardingInventoryDto: OutwardingInventoryDto): Promise<any> {
    // console.log(outwardingInventoryDto, "outwardingInventoryDto")
    const selectedSealData = await this.inventoryService.getInventoryById(outwardingInventoryDto.selectSeal);
    // console.log(selectedSealData, "selectedSealData")
    const remainingCoins = selectedSealData.currentCoinCount - Number(outwardingInventoryDto.noOfCoin)
    const createInverntory = await this.inventoryService.createAltredSealData(selectedSealData.clientId, selectedSealData.originalSealId + " ", outwardingInventoryDto.currentSealId, selectedSealData.currentSealId, remainingCoins, selectedSealData.originalCoinCount, selectedSealData.currentCoinCount, selectedSealData.documentPath)
    console.log(createInverntory, "createInverntorycreateInverntory")
    if (createInverntory) {
      const updateRes = await this.inventoryService.updateOutWrdingInventory(outwardingInventoryDto.currentSealId, remainingCoins, outwardingInventoryDto.selectSeal);
      console.log(createInverntory, "updateResupdateResupdateResupdateRes")

      if (updateRes) {
        return { success: true, message: "Outwarding Successfull" };
      } else {
        console.log("createAltredSealData Insertion failed")
        throw new HttpException('Bad request', status_code.SERVER_ERROR_STATUS_CODE);
      }
    } else {
      console.log("createAltredSealData Insertion failed")
      throw new HttpException('Bad request', status_code.SERVER_ERROR_STATUS_CODE);
    }

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

  // get seals by client
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

  async uploadFile(
    @UploadedFile() file) {
    console.log(file, "=======");
  }
}
