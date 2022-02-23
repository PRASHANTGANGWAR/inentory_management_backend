


import { extname } from 'path';
import { v4 as uuid } from 'uuid';
import { HttpException, HttpStatus } from '@nestjs/common';


// Allow only Excels 
export const excelFileFilter = (req, file, callback) => {
    if (!file.originalname.match(/\.(xls|XLS|xlsx|XLSX)$/)) {
        return callback(
            new HttpException(
                'Only excel files are allowed!',
                HttpStatus.BAD_REQUEST,
            ),
            false,
        );
    }
    callback(null, true);
};


export const editFileName = (req, file, callback) => {
    console.log(file, "============editFIlename")
    const name = file.originalname.split('.')[0];
    const fileExtName = extname(file.originalname);
    callback(null, `${uuid()}${fileExtName}`);
};