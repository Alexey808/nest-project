import { MiddlewareConsumer, Module, RequestMethod } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EntitiesController } from './entities/controllers/entities.controller';
import { EntitiesService } from './entities/services/entities.service';
import { EntitiesModule } from './entities/entities.module';
import { DatabaseModule } from './database/database.module';
import { EntitiesMiddleware } from './entities/services/entities.middleware';
import { EntitiesMiddlewareTwo } from './entities/services/test.middleware';

@Module({
  imports: [
    // DatabaseModule.forRoot([]),
    EntitiesModule,
  ],
  controllers: [AppController,  EntitiesController],
  providers: [AppService, EntitiesService],
})
export class AppModule {

  /**
   * Добовляем middleware. Метод configure может быть async/await
   */
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(EntitiesMiddleware, EntitiesMiddlewareTwo /* otherMethod()*/)
      // .forRoutes(EntitiesController); // или ниже
      .forRoutes({path: 'entit***', method: RequestMethod.GET});
  }

}
