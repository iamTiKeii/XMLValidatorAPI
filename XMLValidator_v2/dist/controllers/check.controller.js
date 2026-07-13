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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CheckController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const check_xml_service_1 = require("../services/check-xml.service");
const xml_check_dto_1 = require("../dto/xml-check.dto");
let CheckController = class CheckController {
    checkXmlService;
    constructor(checkXmlService) {
        this.checkXmlService = checkXmlService;
    }
    checkXml(model, res) {
        const base64Xml = model?.data?.base64Xml;
        const result = this.checkXmlService.checkXml(base64Xml);
        return res.status(result.code).json(result);
    }
};
exports.CheckController = CheckController;
__decorate([
    (0, common_1.Post)('check-xml'),
    (0, common_1.HttpCode)(200),
    (0, swagger_1.ApiOperation)({ summary: 'Kiểm tra và kiểm định nội dung file hồ sơ XML' }),
    (0, swagger_1.ApiBody)({ type: xml_check_dto_1.RequestModel }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'XML hợp lệ', type: xml_check_dto_1.ResponseModel }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'Lỗi định dạng XML hoặc Base64', type: xml_check_dto_1.ResponseModel }),
    (0, swagger_1.ApiResponse)({ status: 422, description: 'Dữ liệu XML không hợp lệ theo quy định', type: xml_check_dto_1.ResponseModel }),
    (0, swagger_1.ApiResponse)({ status: 500, description: 'Lỗi hệ thống', type: xml_check_dto_1.ResponseModel }),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [xml_check_dto_1.RequestModel, Object]),
    __metadata("design:returntype", void 0)
], CheckController.prototype, "checkXml", null);
exports.CheckController = CheckController = __decorate([
    (0, swagger_1.ApiTags)('Check'),
    (0, common_1.Controller)('api/check'),
    __metadata("design:paramtypes", [check_xml_service_1.CheckXmlService])
], CheckController);
//# sourceMappingURL=check.controller.js.map