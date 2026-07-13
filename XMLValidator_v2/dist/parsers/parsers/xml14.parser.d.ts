import { BaseXmlParser } from '../base-xml.parser';
import { Xml14Model } from '../../interfaces/xml-models.interface';
export declare class Xml14Parser extends BaseXmlParser {
    get loaiHoSo(): string;
    parse(xmlContent: string): Xml14Model;
}
