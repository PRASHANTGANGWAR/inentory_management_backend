import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { MONGO_CONNECTION } from './app.properties';
import { InventoryModule } from './inventory/inventory.module';

@Module({
  imports: [MongooseModule.forRoot(MONGO_CONNECTION), UsersModule, InventoryModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
