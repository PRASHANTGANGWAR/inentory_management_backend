export class CreateInventoryDto {
    clientId: number;
    originalSealId: string;
    currentSealId: string;
    coinCount: number;
    tokenCount: number;
    sealStatus: boolean;
    currentCoinCount: number;
    currentTokenCount: number;
    previousSealId: number;
    previousCoinCount: number;
    initialSetup: boolean;
    documentPath: string;
}