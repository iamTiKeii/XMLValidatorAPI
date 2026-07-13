import { BaseXmlParser } from '../base-xml.parser';
import { Xml2Model } from '../../interfaces/xml-models.interface';
export declare class Xml2Parser extends BaseXmlParser {
    get loaiHoSo(): string;
    parse(xmlContent: string): Xml2Model[];
}
