export class UpdateInventoryDto {
    originalSealId: string;
    currentSealId: string;
    coinCount: number;
    tokenCount: number;
    sealStatus: boolean;
    currentCoinCount: number;
    currentTokenCount: number;
    previousSealId: number;
    previousCoinCount: number;
}


export class UpdateStatusDto {
    status: boolean;
}

export class passwordDto {
    newPassword: string;
    oldPassword: string;
}

export class UpdatePasswordDto {
    password: string;
}