import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  getFirstHeadline(): string {
    return 'Hello World! This is the first Headline!';
  }
}
