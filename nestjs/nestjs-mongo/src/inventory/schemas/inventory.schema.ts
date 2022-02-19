import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from 'mongoose';

export type InventoryDocument = Inventory & Document;

@Schema()
export class Inventory {
    @Prop({required: true })
    inventoryId: string;

    @Prop({required: true })
    clientId: number;

    @Prop({required: true })
    originalSealId: string;

    @Prop()
    currentSealId: string;

    @Prop()
    coinCount: number;

    @Prop()
    sealStatus: boolean;

    @Prop()
    currentCoinCount: number;

    @Prop()
    previousSealId: number;

    @Prop()
    previousCoinCount: number;

    @Prop({ default: false })
    initialSetup: boolean; // on first time login 
    
    @Prop()
    documentPath: string; // document details uploaded
    
}

export const InventorySchema = SchemaFactory.createForClass(Inventory); 