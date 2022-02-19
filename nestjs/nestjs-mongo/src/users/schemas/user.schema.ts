import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from 'mongoose';

export type UserDocument = User & Document;

@Schema()
export class User {
    @Prop()
    userId: string;

    @Prop({ required: true })
    firstName: string;

    @Prop({ required: true })
    lastName: string;

    @Prop({ required: true })
    email: string;

    @Prop({ required: true })
    empId: string;

    @Prop({ required: true })
    mobileNo: number;

    @Prop({ required: true })
    password: string;

    @Prop({ default: false })
    status: boolean; 

}

export const UserSchema = SchemaFactory.createForClass(User);