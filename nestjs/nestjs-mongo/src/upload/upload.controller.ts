import { Controller, Get, Param, Post, Res, UploadedFile, UseGuards, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';

import { UploadService } from './upload.service';

@Controller('upload')
export class UploadController {

  private readonly uploadService: UploadService;

  public constructor(uploadService: UploadService) {
    this.uploadService = uploadService
  }


  // @Post('products')
  // @UseInterceptors(FileInterceptor('file'))
  // uploadFile(@UploadedFile() file: Express.Multer.File) {
  //   console.log(file, "=====================file");
  // }

  @Post('document')
  @UseInterceptors(FileInterceptor('file'))
  async addProducts(@UploadedFile() file) {
      console.log("=================here ipload", file)
    let UploadedFile = await this.uploadService.uploadFile(file.buffer, file.filename, file.originalname, "upload/get-file", file.length, file.originalname.split('.').pop());
    
    return { message: 'File Uploaded', data: UploadedFile, type: 200 };
  }


  @Get('get-file/:fileName')
  getImage(@Param('fileName') image, @Res() res) {
    const response = res.sendFile(image, { root: '/uploads' });
    return { message: 'File Uploaded', data: response, type: 'success' };
  }

}

function ApiConsumes(arg0: string) {
    throw new Error('Function not implemented.');
}

