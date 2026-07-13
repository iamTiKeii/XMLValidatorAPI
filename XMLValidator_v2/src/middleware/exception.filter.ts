import { ExceptionFilter, Catch, ArgumentsHost, HttpException, HttpStatus } from '@nestjs/common';
import { Response } from 'express';

@Catch()
export class GlobalExceptionFilter implements ExceptionFilter {
  catch(exception: any, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();

    const status =
      exception instanceof HttpException
        ? exception.getStatus()
        : HttpStatus.INTERNAL_SERVER_ERROR;

    const message =
      exception instanceof HttpException
        ? exception.message
        : exception.message || 'Unknown system error';

    // If it's an internal server error, output the C# Cacth-all format exactly
    if (status === HttpStatus.INTERNAL_SERVER_ERROR) {
      return response.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
        code: HttpStatus.INTERNAL_SERVER_ERROR,
        message: 'Lỗi hệ thống: ' + message,
      });
    }

    // Otherwise, return standard HTTP exception details
    return response.status(status).json({
      code: status,
      message: message,
    });
  }
}
