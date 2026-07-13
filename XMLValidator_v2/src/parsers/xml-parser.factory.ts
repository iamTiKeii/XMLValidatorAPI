import { BaseXmlParser } from './base-xml.parser';
import { Xml1Parser } from './parsers/xml1.parser';
import { Xml2Parser } from './parsers/xml2.parser';
import { Xml3Parser } from './parsers/xml3.parser';
import { Xml4Parser } from './parsers/xml4.parser';
import { Xml5Parser } from './parsers/xml5.parser';
import { Xml6Parser } from './parsers/xml6.parser';
import { Xml7Parser } from './parsers/xml7.parser';
import { Xml8Parser } from './parsers/xml8.parser';
import { Xml9Parser } from './parsers/xml9.parser';
import { Xml10Parser } from './parsers/xml10.parser';
import { Xml11Parser } from './parsers/xml11.parser';
import { Xml13Parser } from './parsers/xml13.parser';
import { Xml14Parser } from './parsers/xml14.parser';
import { Xml15Parser } from './parsers/xml15.parser';

export class XmlParserFactory {
  private static readonly parsers: BaseXmlParser[] = [
    new Xml1Parser(),
    new Xml2Parser(),
    new Xml3Parser(),
    new Xml4Parser(),
    new Xml5Parser(),
    new Xml6Parser(),
    new Xml7Parser(),
    new Xml8Parser(),
    new Xml9Parser(),
    new Xml10Parser(),
    new Xml11Parser(),
    new Xml13Parser(),
    new Xml14Parser(),
    new Xml15Parser(),
  ];

  public static getParser(loaiHoSo: string): BaseXmlParser | null {
    if (!loaiHoSo) return null;
    const key = loaiHoSo.trim().toUpperCase();
    return this.parsers.find(p => p.loaiHoSo === key) || null;
  }
}
