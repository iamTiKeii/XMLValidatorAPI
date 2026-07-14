import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import compression from 'compression';
import helmet from 'helmet';
import * as dotenv from 'dotenv';
import { AppModule } from './app.module';
import { appConfig } from './config/app.config';
import { GlobalExceptionFilter } from './middleware/exception.filter';

// Load environment variables
dotenv.config();

async function bootstrap() {
  const config = appConfig();
  const app = await NestFactory.create(AppModule);

  // Enable CORS
  app.enableCors({
    origin: '*',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
    allowedHeaders: 'Content-Type, Accept, X-API-Key',
  });

  // Enable Helmet for security headers
  app.use(
    helmet({
      contentSecurityPolicy: false, // Keep swagger-ui assets loadable
    })
  );

  // Enable compression
  app.use(compression());

  // Global exception filter
  app.useGlobalFilters(new GlobalExceptionFilter());

  // Configure Swagger API documentation
  const swaggerConfig = new DocumentBuilder()
    .setTitle('XMLCheck API')
    .setDescription('NestJS API for validating XML payloads and rule checking')
    .setVersion('1.0')
    .addApiKey({ type: 'apiKey', name: 'X-API-Key', in: 'header' }, 'x-api-key')
    .build();

  const document = SwaggerModule.createDocument(app, swaggerConfig);
  SwaggerModule.setup('swagger', app, document);

  // Define a simple healthcheck route
  const server = app.getHttpServer();
  app.getHttpAdapter().get('/health', (req: any, res: any) => {
    res.status(200).json({ status: 'Healthy' });
  });

  // Start the server
  const port = config.port;
  await app.listen(port);
  console.log(`Application is running on: http://localhost:${port}`);
  console.log(`Swagger documentation is available at: http://localhost:${port}/swagger`);
}

bootstrap();
