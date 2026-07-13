import { BaseXmlParser } from '../base-xml.parser';
import { Xml15Model } from '../../interfaces/xml-models.interface';
export declare class Xml15Parser extends BaseXmlParser {
    get loaiHoSo(): string;
    parse(xmlContent: string): Xml15Model[];
}
