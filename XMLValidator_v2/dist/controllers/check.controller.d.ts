import { Response } from 'express';
import { CheckXmlService } from '../services/check-xml.service';
import { RequestModel } from '../dto/xml-check.dto';
export declare class CheckController {
    private readonly checkXmlService;
    constructor(checkXmlService: CheckXmlService);
    checkXml(model: RequestModel, res: Response): Response<any, Record<string, any>>;
}
