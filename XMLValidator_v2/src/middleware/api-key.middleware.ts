import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import { appConfig } from '../config/app.config';

@Injectable()
export class ApiKeyMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    const path = req.path;

    // Bypass API key check for Swagger and health paths
    if (
      path &&
      (path.toLowerCase().startsWith('/swagger') ||
        path.toLowerCase().startsWith('/health'))
    ) {
      return next();
    }

    const API_KEY_HEADER = 'x-api-key'; // express headers are lowercase
    const extractedApiKey = req.headers[API_KEY_HEADER];

    const config = appConfig();
    const apiKey = config.apiKey;

    if (!extractedApiKey || extractedApiKey !== apiKey) {
      return res.status(401).json({
        success: false,
        message: 'Invalid API Key',
      });
    }

    next();
  }
}
