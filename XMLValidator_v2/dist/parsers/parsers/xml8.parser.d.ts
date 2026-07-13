import { BaseXmlParser } from '../base-xml.parser';
import { Xml8Model } from '../../interfaces/xml-models.interface';
export declare class Xml8Parser extends BaseXmlParser {
    get loaiHoSo(): string;
    parse(xmlContent: string): Xml8Model;
}
