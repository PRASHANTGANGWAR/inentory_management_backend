import { Module } from '@nestjs/common';
import { MongooseModule } from "@nestjs/mongoose";
import { Inventory, InventorySchema } from "./schemas/inventory.schema";
import { InventoryService } from './inventory.service';
import { InventoryController } from './inventory.controller';
import { InventoryRepository } from "./inventory.repository";
import { UploadController } from 'src/upload/upload.controller';
import { UploadService } from 'src/upload/upload.service';
import { UploadRepository } from 'src/upload/upload.repository';
import { MulterModule } from '@nestjs/platform-express';
import { UploadModule } from 'src/upload/upload.module';

@Module({
  imports: [ MulterModule.register({
    dest: './upload',
  }),MongooseModule.forFeature([{ name: Inventory.name, schema: InventorySchema }]), UploadModule],
  controllers: [InventoryController, UploadController],

  providers: [InventoryService, InventoryRepository ]
})
export class InventoryModule {}


