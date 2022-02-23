import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { MONGO_CONNECTION } from './app.properties';
import { InventoryModule } from './inventory/inventory.module';
import { AuthModule } from './auth/auth.module';
import { ClientController } from './client/client.controller';
import { ClientService } from './client/client.service';
import { ClientModule } from './client/client.module';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { PostInterceptor } from './interceptors/post.interceptor';
import { UploadModule } from './upload/upload.module';

@Module({
  imports: [MongooseModule.forRoot(MONGO_CONNECTION), UsersModule, InventoryModule, AuthModule, ClientModule, UploadModule],
  controllers: [AppController, ClientController],
  providers: [AppService, ClientService , {
    provide: APP_INTERCEPTOR,
    useClass: PostInterceptor
}],
})
export class AppModule {}



// provider:
// {
//     provide: APP_INTERCEPTOR,
//     useClass: PostInterceptor
// }