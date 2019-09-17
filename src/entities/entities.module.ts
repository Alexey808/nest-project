import { Global, Module } from '@nestjs/common';
import { EntitiesController } from './controllers/entities.controller';
import { EntitiesService } from './services/entities.service';

// @Global() // делает модуль глобальным
@Module({
  controllers: [EntitiesController],
  providers: [EntitiesService],
  exports: [EntitiesService],
})
export class EntitiesModule {}
