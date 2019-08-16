import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EntitiesController } from './controllers/entities/entities.controller';

@Module({
  imports: [],
  controllers: [AppController,  EntitiesController],
  providers: [AppService],
})
export class AppModule {}
