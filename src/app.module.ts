import { Module } from '@nestjs/common';
import { RouterModule } from '@nestjs/core';
import { UploadModule } from './modules/upload/upload.module';

@Module({
  imports: [
    UploadModule,
    RouterModule.register([
      {
        path: 'upload',
        module: UploadModule,
      },
    ]),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
