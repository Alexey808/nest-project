import { DynamicModule, Module } from '@nestjs/common';
import { DatabaseService } from './services/database.service';
import { ConnectionService } from './connection/connection.service';

@Module({
  providers: [DatabaseService, ConnectionService],
})
export class DatabaseModule {
  // static forRoot(entities = [], options?): DynamicModule {
    // const providers = DatabaseService.createDatabaseProviders(options, entities);
    //
    // return {
    //   module: DatabaseModule,
    //   providers: providers,
    //   exports: providers,
    // };
  // }
}
