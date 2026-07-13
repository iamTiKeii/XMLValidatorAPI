import { ResponseModel } from '../dto/xml-check.dto';
export declare class CheckXmlService {
    checkXml(base64Xml: string): ResponseModel;
    private mergeList;
    private extractMaLk;
    private normalizeLoaiHoSo;
    private getElementsByTagNameLocal;
    private getFirstChildElementLocal;
}
