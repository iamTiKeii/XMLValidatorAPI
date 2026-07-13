import { BaseXmlParser } from '../base-xml.parser';
import { Xml11Model } from '../../interfaces/xml-models.interface';
export declare class Xml11Parser extends BaseXmlParser {
    get loaiHoSo(): string;
    parse(xmlContent: string): Xml11Model;
}
