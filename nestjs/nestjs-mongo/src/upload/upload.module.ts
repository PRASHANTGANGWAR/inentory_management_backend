import { Module } from '@nestjs/common';
import { UploadRepository } from './upload.repository';
import { UploadService } from './upload.service';
import { UploadController } from './upload.controller';


import { diskStorage } from 'multer';


import { MulterModule } from '@nestjs/platform-express';
import { editFileName } from '../common/utils/file.util';

@Module({
  imports: [
    // TypeOrmModule.forFeature([PublicFile]),
    // OtpModule,
    MulterModule.register({
      dest: './upload',
    })

    // MulterModule.registerAsync({
    //   imports: [],
    //   useFactory: async () => ({
    //     storage: diskStorage({
    //       destination: './uploads',
    //       filename: editFileName,
    //     }),
    //     // fileFilter: excelFileFilter
    //   }),
    //   inject: [],
    // }),
  ],
  providers: [
    UploadService,
    UploadRepository
  ],
  exports: [
    UploadService,
    UploadRepository
  ],
  controllers: [UploadController],
})
export class UploadModule { }
