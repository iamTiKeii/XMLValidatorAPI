import { BaseXmlParser } from './base-xml.parser';
export declare class XmlParserFactory {
    private static readonly parsers;
    static getParser(loaiHoSo: string): BaseXmlParser | null;
}
