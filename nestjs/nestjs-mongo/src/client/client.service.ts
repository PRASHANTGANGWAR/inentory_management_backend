import { Injectable } from '@nestjs/common';
import { clientData } from './../app.properties'
import { Client } from "./schemas/client.schema";

@Injectable()
export class ClientService {

    constructor() {}
    async getClients(): Promise<Client[]> {
        return clientData;
    }
}
