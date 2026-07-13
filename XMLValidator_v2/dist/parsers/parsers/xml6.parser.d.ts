import { BaseXmlParser } from '../base-xml.parser';
import { Xml6Model } from '../../interfaces/xml-models.interface';
export declare class Xml6Parser extends BaseXmlParser {
    get loaiHoSo(): string;
    parse(xmlContent: string): Xml6Model[];
}
