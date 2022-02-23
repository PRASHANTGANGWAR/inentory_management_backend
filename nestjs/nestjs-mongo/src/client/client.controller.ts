import { Body, Controller, Get, Param, Patch, Post, UploadedFiles, UploadedFile, UseInterceptors } from '@nestjs/common';
import { Client } from './schemas/client.schema';
import { ClientService } from './client.service';

@Controller('client')
export class ClientController {

    constructor(private readonly ClientService: ClientService) { }

    @Get()
    async getUsers(): Promise<Client[]> {
      return this.ClientService.getClients();
    }
  }
