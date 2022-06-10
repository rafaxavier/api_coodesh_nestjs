import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return JSON.stringify('Back-end Challenge 2021 🏅 - Space Flight News');
  }
}
