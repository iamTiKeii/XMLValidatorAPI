import { BaseXmlParser } from '../base-xml.parser';
import { Xml13Model } from '../../interfaces/xml-models.interface';
export declare class Xml13Parser extends BaseXmlParser {
    get loaiHoSo(): string;
    parse(xmlContent: string): Xml13Model;
}
