import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from 'mongoose';

export type InventoryDocument = Inventory & Document;

@Schema()
export class Inventory {
    @Prop({required: true })
    inventoryId: string;

    @Prop({required: true })
    clientId: number;

    @Prop() // R
    originalSealId: string;

    @Prop()
    currentSealId: string; // R new seal id

    @Prop()
    previousSealId: string;

    @Prop()
    weight: number;

    @Prop()
    originalCoinCount: number;

    @Prop()
    currentCoinCount: number;

    @Prop()
    previousCoinCount: number;
    
    @Prop()
    documentPath: string; // document details uploaded

    @Prop({default: false})
    sealStatus: boolean; // 0 > new , 1 replaced

    @Prop({default: false})
    redemptionStatus: boolean; // 0 > fresh , 1 > redeemed

    @Prop({ default: Date.now })
    createdAt: Date;

    @Prop({ default: Date.now })
    updatedAt: Date;
}

export const InventorySchema = SchemaFactory.createForClass(Inventory); 