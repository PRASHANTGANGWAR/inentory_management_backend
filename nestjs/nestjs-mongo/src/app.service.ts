import { Injectable } from '@nestjs/common';
import { DEFAULT_MESSAGE } from './app.properties';
@Injectable()
export class AppService {
  getHello(): string {
    return DEFAULT_MESSAGE;
  }
}
