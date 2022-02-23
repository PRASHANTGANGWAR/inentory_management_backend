import { Injectable } from '@nestjs/common';
import { UploadRepository } from './upload.repository';


@Injectable()
export class UploadService {

    public constructor(private upload: UploadRepository) {
    }

    /**
     * @method uploadFile
     * @param dataBuffer 
     * @param fileName 
     * @param realName 
     * @param path 
     * @param size 
     * @param extension 
     * @description This is used to upload a file 
     * @access public
     */
    public uploadFile = async (dataBuffer: Buffer, fileName: string, realName: string, path: string, size: number = 0, extension: string) => {

        const newFile = await this.upload.uploadFile(fileName, realName, path, size, extension)

        return newFile;
    }


}
