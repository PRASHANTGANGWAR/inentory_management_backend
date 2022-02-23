import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from 'mongoose';

export type InventoryDocument = Inventory & Document;

@Schema()
export class Inventory {
    @Prop({required: true })
    inventoryId: string;

    @Prop({required: true })
    clientId: number;

    @Prop({ unique: true}) // R
    originalSealId: string;

    @Prop()
    currentSealId: string; // R new seal id

    @Prop()
    weight: number;

    @Prop({default: 0})
    sealStatus: boolean;

    @Prop()
    currentCoinCount: number;

    @Prop()
    previousSealId: number;

    @Prop()
    previousCoinCount: number;
    
    @Prop()
    documentPath: string; // document details uploaded

    @Prop({default: 0})
    redemptionStatus: number;
    
}

export const InventorySchema = SchemaFactory.createForClass(Inventory); 