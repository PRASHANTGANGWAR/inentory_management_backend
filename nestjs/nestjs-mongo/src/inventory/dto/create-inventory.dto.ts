export class CreateInventoryDto {
    inventoryId: string //
    clientId: number;
    originalSealId: string; 
    currentSealId: string;
    coinCount: number;
    sealStatus: boolean;
    currentCoinCount: number;
    previousSealId: number;
    previousCoinCount: number;
    documentPath: string;
}

export class InwardInventoryDto {
    inventoryId: string //
    clientId: number;
    currentSealId: string; 
    originalSealId: string;
    originalCoinCount: string 
    currentCoinCount: number;
    documentPath: string;
}

export class ReqInwardingInventoryDto {
    inventoryId: string //
    clientId: number;
    currentSealId: string; 
    originalSealId: string; 
    documentPath: string;
    noOfCoin: number;
}

export class OutwardingInventoryDto {
    clientId: number;
    currentSealId: string; 
    selectSeal: string;
    noOfCoin: number
}


export class createAltredSealData {
    inventoryId: string //
    clientId: number;
    currentSealId: string; 
    originalSealId: string; 
    previousCoinCount: number;
    originalCoinCount : number
    currentCoinCount: number;
    documentPath: string;
    previousSealId: string;
    sealStatus: boolean;
}