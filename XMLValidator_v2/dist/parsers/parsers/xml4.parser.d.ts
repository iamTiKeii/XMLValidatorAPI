import { BaseXmlParser } from '../base-xml.parser';
import { Xml4Model } from '../../interfaces/xml-models.interface';
export declare class Xml4Parser extends BaseXmlParser {
    get loaiHoSo(): string;
    parse(xmlContent: string): Xml4Model[];
}
