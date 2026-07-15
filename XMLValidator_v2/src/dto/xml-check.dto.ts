import { ApiProperty } from '@nestjs/swagger';

export class RequestModelData {
  @ApiProperty({ example: 'Base64EncodedXMLStringHere', description: 'Nội dung file XML mã hóa Base64' })
  base64Xml: string;
}

export class RequestModel {
  @ApiProperty({ type: RequestModelData })
  data: RequestModelData;
}

export class ErrorDetails {
  @ApiProperty({ example: 'MA_LK', description: 'Tên trường bị lỗi' })
  key: string;

  @ApiProperty({ example: 'MA_LK không được rỗng', description: 'Chi tiết thông báo lỗi' })
  message: string;

  @ApiProperty({ example: 'RULE_XML1_MA_LK_01', required: false, description: 'ID của rule kiểm tra' })
  ruleId?: string;

  @ApiProperty({ example: 'ERROR', required: false, description: 'Mức độ nghiêm trọng (ERROR/WARNING)' })
  severity?: string;

  @ApiProperty({ example: 'QĐ 3176/QĐ-BYT - Bảng 1, STT 1', required: false, description: 'Điều khoản tham chiếu QĐ3176' })
  reference?: string;
}


export class XMLError {
  @ApiProperty({ example: 'XML1', description: 'Loại hồ sơ (XML1 - XML15)' })
  type: string;

  @ApiProperty({ type: [ErrorDetails], description: 'Danh sách chi tiết lỗi của loại hồ sơ này' })
  details: ErrorDetails[];
}

export class ResponseModel {
  @ApiProperty({ example: 200, description: 'Mã trạng thái phản hồi HTTP' })
  code: number;

  @ApiProperty({ example: 'XML hợp lệ (1 hồ sơ)', description: 'Thông báo kết quả' })
  message: string;

  @ApiProperty({ type: [XMLError], required: false, nullable: true, description: 'Danh sách lỗi nếu XML không hợp lệ' })
  values?: XMLError[] | null;
}
