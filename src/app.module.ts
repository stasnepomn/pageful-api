import { Module } from '@nestjs/common';
import { UploadModule } from './modules/upload/upload.module';

@Module({
  imports: [UploadModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
