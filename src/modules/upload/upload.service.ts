import { Injectable } from '@nestjs/common';
import { convertToHtml } from 'mammoth';

@Injectable()
export class UploadService {
  async convertDocxToHtml(buffer: Buffer) {
    const { value } = await convertToHtml({ buffer: buffer });
    return value;
  }
}
