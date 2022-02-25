export const MONGO_CONNECTION = 'mongodb://localhost/demo';
export const PORT = 3002;
export const DEFAULT_MESSAGE = 'Inventory-management application running successfully';
export const UPLOADED_FILES_DESTINATION = 'uploadedFiles';
export const jwtConstants = { secret: 'secretKey', expiresIn: '600s' };
export const clientData = [{ name: 'Alice', value: 0, clientId: 'AliceId' }, { name: 'Bob', value: 1, clientId: "BobId" }]
export enum redemptionStatusEnum {
    FRESH,
    ATLERED
}

export enum sealStatus {
    NEW,
    REPLACED
}
export const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2NDU4MDkxNzEsImV4cCI6MTY0NTgwOTc3MX0.yyKq-7GPx8fXMJ8qE9OwRydeaKzn20PSeu43WpCZ7Eo"

export const status_code = {
    OK_STATUS_CODE: 200,
    NO_CONTENT_STATUS_CODE: 204,
    BAD_REQUEST_STATUS_CODE: 400,
    NOT_FOUND_STATUS_CODE: 404,
    SERVER_ERROR_STATUS_CODE: 500
}
