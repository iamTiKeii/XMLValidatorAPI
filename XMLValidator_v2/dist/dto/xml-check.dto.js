"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResponseModel = exports.XMLError = exports.ErrorDetails = exports.RequestModel = exports.RequestModelData = void 0;
const swagger_1 = require("@nestjs/swagger");
class RequestModelData {
    base64Xml;
}
exports.RequestModelData = RequestModelData;
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Base64EncodedXMLStringHere', description: 'Nội dung file XML mã hóa Base64' }),
    __metadata("design:type", String)
], RequestModelData.prototype, "base64Xml", void 0);
class RequestModel {
    data;
}
exports.RequestModel = RequestModel;
__decorate([
    (0, swagger_1.ApiProperty)({ type: RequestModelData }),
    __metadata("design:type", RequestModelData)
], RequestModel.prototype, "data", void 0);
class ErrorDetails {
    key;
    message;
}
exports.ErrorDetails = ErrorDetails;
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'MA_LK', description: 'Tên trường bị lỗi' }),
    __metadata("design:type", String)
], ErrorDetails.prototype, "key", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'MA_LK không được rỗng', description: 'Chi tiết thông báo lỗi' }),
    __metadata("design:type", String)
], ErrorDetails.prototype, "message", void 0);
class XMLError {
    type;
    details;
}
exports.XMLError = XMLError;
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'XML1', description: 'Loại hồ sơ (XML1 - XML15)' }),
    __metadata("design:type", String)
], XMLError.prototype, "type", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: [ErrorDetails], description: 'Danh sách chi tiết lỗi của loại hồ sơ này' }),
    __metadata("design:type", Array)
], XMLError.prototype, "details", void 0);
class ResponseModel {
    code;
    message;
    values;
}
exports.ResponseModel = ResponseModel;
__decorate([
    (0, swagger_1.ApiProperty)({ example: 200, description: 'Mã trạng thái phản hồi HTTP' }),
    __metadata("design:type", Number)
], ResponseModel.prototype, "code", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'XML hợp lệ (1 hồ sơ)', description: 'Thông báo kết quả' }),
    __metadata("design:type", String)
], ResponseModel.prototype, "message", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: [XMLError], required: false, nullable: true, description: 'Danh sách lỗi nếu XML không hợp lệ' }),
    __metadata("design:type", Array)
], ResponseModel.prototype, "values", void 0);
//# sourceMappingURL=xml-check.dto.js.map