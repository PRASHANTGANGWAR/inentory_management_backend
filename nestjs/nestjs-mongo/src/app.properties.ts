export const MONGO_CONNECTION = 'mongodb://localhost/demo';
export const PORT = 3002;
export const DEFAULT_MESSAGE = 'Inventory-management application running successfully';
export const UPLOADED_FILES_DESTINATION = 'uploadedFiles';
export const jwtConstants = { secret: 'secretKey' };
export const clientData = [ {name: 'Alice', value: 0 , clientId: 'AliceId' },{ name: 'Bob', value: 1 , clientId:"BobId" }]
export enum redemptionStatusEnum {
    FRESH,
    ATLERED
}

export enum sealStatus {
    NEW,
    REPLACED
}
