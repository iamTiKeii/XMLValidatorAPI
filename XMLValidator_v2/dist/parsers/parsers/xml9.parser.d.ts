import { BaseXmlParser } from '../base-xml.parser';
import { Xml9Model } from '../../interfaces/xml-models.interface';
export declare class Xml9Parser extends BaseXmlParser {
    get loaiHoSo(): string;
    parse(xmlContent: string): Xml9Model[];
}
