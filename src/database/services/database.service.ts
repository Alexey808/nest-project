import { Injectable } from '@nestjs/common';

@Injectable()
export class DatabaseService {
  createDatabaseProviders(option, entities) {
    console.log(option, entities);
    return [];
  }
}
