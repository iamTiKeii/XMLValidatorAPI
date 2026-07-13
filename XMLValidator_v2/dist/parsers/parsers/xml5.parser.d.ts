import { BaseXmlParser } from '../base-xml.parser';
import { Xml5Model } from '../../interfaces/xml-models.interface';
export declare class Xml5Parser extends BaseXmlParser {
    get loaiHoSo(): string;
    parse(xmlContent: string): Xml5Model[];
}
