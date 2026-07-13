import { BaseXmlParser } from '../base-xml.parser';
import { Xml3Model } from '../../interfaces/xml-models.interface';
export declare class Xml3Parser extends BaseXmlParser {
    get loaiHoSo(): string;
    parse(xmlContent: string): Xml3Model[];
}
