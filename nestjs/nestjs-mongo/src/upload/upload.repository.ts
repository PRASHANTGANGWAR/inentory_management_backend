import { Injectable } from '@nestjs/common';


@Injectable()
export class UploadRepository {

    public constructor() { }

    public uploadFile = async (
        key: string,
        real_name: string,
        path: string,
        size: number,
        extension: string
    ) => {

        let newFile = {
            key: key,
            real_name: real_name,
            path: path,
            size: size,
            extension: extension
        }; 

        return newFile;
    }
}
