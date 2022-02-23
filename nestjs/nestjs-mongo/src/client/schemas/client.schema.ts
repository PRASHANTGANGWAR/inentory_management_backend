import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from 'mongoose';

export type InventoryDocument = Client & Document;

@Schema()
export class Client {
    @Prop({required: true })
    clientId: string;

    @Prop({required: true })
    name: string;

    @Prop({required: true })
    value: number;
}

export const ClientSchema = SchemaFactory.createForClass(Client); 