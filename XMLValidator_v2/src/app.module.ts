import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { CheckController } from './controllers/check.controller';
import { CheckXmlService } from './services/check-xml.service';
import { DictionaryCache } from './parsers/dictionary.cache';
import { ApiKeyMiddleware } from './middleware/api-key.middleware';

@Module({
  controllers: [CheckController],
  providers: [
    CheckXmlService,
    DictionaryCache,
  ],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(ApiKeyMiddleware)
      .forRoutes('*');
  }
}
