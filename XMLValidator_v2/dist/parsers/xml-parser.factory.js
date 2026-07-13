"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.XmlParserFactory = void 0;
const xml1_parser_1 = require("./parsers/xml1.parser");
const xml2_parser_1 = require("./parsers/xml2.parser");
const xml3_parser_1 = require("./parsers/xml3.parser");
const xml4_parser_1 = require("./parsers/xml4.parser");
const xml5_parser_1 = require("./parsers/xml5.parser");
const xml6_parser_1 = require("./parsers/xml6.parser");
const xml7_parser_1 = require("./parsers/xml7.parser");
const xml8_parser_1 = require("./parsers/xml8.parser");
const xml9_parser_1 = require("./parsers/xml9.parser");
const xml10_parser_1 = require("./parsers/xml10.parser");
const xml11_parser_1 = require("./parsers/xml11.parser");
const xml13_parser_1 = require("./parsers/xml13.parser");
const xml14_parser_1 = require("./parsers/xml14.parser");
const xml15_parser_1 = require("./parsers/xml15.parser");
class XmlParserFactory {
    static parsers = [
        new xml1_parser_1.Xml1Parser(),
        new xml2_parser_1.Xml2Parser(),
        new xml3_parser_1.Xml3Parser(),
        new xml4_parser_1.Xml4Parser(),
        new xml5_parser_1.Xml5Parser(),
        new xml6_parser_1.Xml6Parser(),
        new xml7_parser_1.Xml7Parser(),
        new xml8_parser_1.Xml8Parser(),
        new xml9_parser_1.Xml9Parser(),
        new xml10_parser_1.Xml10Parser(),
        new xml11_parser_1.Xml11Parser(),
        new xml13_parser_1.Xml13Parser(),
        new xml14_parser_1.Xml14Parser(),
        new xml15_parser_1.Xml15Parser(),
    ];
    static getParser(loaiHoSo) {
        if (!loaiHoSo)
            return null;
        const key = loaiHoSo.trim().toUpperCase();
        return this.parsers.find(p => p.loaiHoSo === key) || null;
    }
}
exports.XmlParserFactory = XmlParserFactory;
//# sourceMappingURL=xml-parser.factory.js.map