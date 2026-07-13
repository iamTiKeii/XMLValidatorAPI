import { BaseXmlParser } from '../base-xml.parser';
import { Xml1Model } from '../../interfaces/xml-models.interface';
export declare class Xml1Parser extends BaseXmlParser {
    get loaiHoSo(): string;
    parse(xmlContent: string): Xml1Model;
}
