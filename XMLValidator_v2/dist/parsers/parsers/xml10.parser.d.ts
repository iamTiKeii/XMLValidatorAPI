import { BaseXmlParser } from '../base-xml.parser';
import { Xml10Model } from '../../interfaces/xml-models.interface';
export declare class Xml10Parser extends BaseXmlParser {
    get loaiHoSo(): string;
    parse(xmlContent: string): Xml10Model;
}
