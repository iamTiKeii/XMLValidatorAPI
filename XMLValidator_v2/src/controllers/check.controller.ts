import { Controller, Post, Body, Res, HttpCode } from '@nestjs/common';
import { Response } from 'express';
import { ApiTags, ApiOperation, ApiResponse, ApiBody } from '@nestjs/swagger';
import { CheckXmlService } from '../services/check-xml.service';
import { RequestModel, ResponseModel } from '../dto/xml-check.dto';

@ApiTags('Check')
@Controller('api/check')
export class CheckController {
  constructor(private readonly checkXmlService: CheckXmlService) {}

  @Post('check-xml')
  @HttpCode(200) // Default swagger description code
  @ApiOperation({ summary: 'Kiểm tra và kiểm định nội dung file hồ sơ XML' })
  @ApiBody({ type: RequestModel })
  @ApiResponse({ status: 200, description: 'XML hợp lệ', type: ResponseModel })
  @ApiResponse({ status: 400, description: 'Lỗi định dạng XML hoặc Base64', type: ResponseModel })
  @ApiResponse({ status: 422, description: 'Dữ liệu XML không hợp lệ theo quy định', type: ResponseModel })
  @ApiResponse({ status: 500, description: 'Lỗi hệ thống', type: ResponseModel })
  checkXml(@Body() model: RequestModel, @Res() res: Response) {
    const base64Xml = model?.data?.base64Xml;
    const result = this.checkXmlService.checkXml(base64Xml);
    return res.status(result.code).json(result);
  }
}
