import { Module } from '@nestjs/common';
import { MongooseModule } from "@nestjs/mongoose";
import { Inventory, InventorySchema } from "./schemas/inventory.schema";
import { InventoryService } from './inventory.service';
import { InventoryController } from './inventory.controller';
import { InventoryRepository } from "./inventory.repository";

@Module({
  imports: [MongooseModule.forFeature([{ name: Inventory.name, schema: InventorySchema }])],
  controllers: [InventoryController],
  providers: [InventoryService, InventoryRepository ]
})
export class InventoryModule {}


