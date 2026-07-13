import { BaseXmlParser } from '../base-xml.parser';
import { Xml7Model } from '../../interfaces/xml-models.interface';
export declare class Xml7Parser extends BaseXmlParser {
    get loaiHoSo(): string;
    parse(xmlContent: string): Xml7Model;
}
