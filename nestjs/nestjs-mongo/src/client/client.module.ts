import { Module } from '@nestjs/common';
import { ClientController } from './client.controller';
import { MongooseModule } from "@nestjs/mongoose";
import { Client, ClientSchema } from "./schemas/client.schema";
import { ClientService } from './client.service';

@Module({
  imports: [MongooseModule.forFeature([{ name: Client.name, schema: ClientSchema }])],
  controllers: [ClientController],
  providers: [ClientService ]
})
export class ClientModule {}
