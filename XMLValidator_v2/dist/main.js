"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const swagger_1 = require("@nestjs/swagger");
const compression = require("compression");
const helmet_1 = require("helmet");
const dotenv = require("dotenv");
const app_module_1 = require("./app.module");
const app_config_1 = require("./config/app.config");
const exception_filter_1 = require("./middleware/exception.filter");
dotenv.config();
async function bootstrap() {
    const config = (0, app_config_1.appConfig)();
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.enableCors({
        origin: '*',
        methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
        allowedHeaders: 'Content-Type, Accept, X-API-Key',
    });
    app.use((0, helmet_1.default)({
        contentSecurityPolicy: false,
    }));
    app.use(compression());
    app.useGlobalFilters(new exception_filter_1.GlobalExceptionFilter());
    const swaggerConfig = new swagger_1.DocumentBuilder()
        .setTitle('XMLCheck API')
        .setDescription('NestJS API for validating XML payloads and rule checking')
        .setVersion('1.0')
        .addApiKey({ type: 'apiKey', name: 'X-API-Key', in: 'header' }, 'x-api-key')
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, swaggerConfig);
    swagger_1.SwaggerModule.setup('swagger', app, document);
    const server = app.getHttpServer();
    app.getHttpAdapter().get('/health', (req, res) => {
        res.status(200).json({ status: 'Healthy' });
    });
    const port = config.port;
    await app.listen(port);
    console.log(`Application is running on: http://localhost:${port}`);
    console.log(`Swagger documentation is available at: http://localhost:${port}/swagger`);
}
bootstrap();
//# sourceMappingURL=main.js.map