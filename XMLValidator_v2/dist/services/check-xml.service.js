"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CheckXmlService = void 0;
const common_1 = require("@nestjs/common");
const xmldom_1 = require("@xmldom/xmldom");
const xml_parser_factory_1 = require("../parsers/xml-parser.factory");
const hoso_context_1 = require("./hoso-context");
const xml1RuleRunner_1 = require("../parsers/rules/xml1/xml1RuleRunner");
const xml2RuleRunner_1 = require("../parsers/rules/xml2/xml2RuleRunner");
const xml3RuleRunner_1 = require("../parsers/rules/xml3/xml3RuleRunner");
const xml4RuleRunner_1 = require("../parsers/rules/xml4/xml4RuleRunner");
const xml5RuleRunner_1 = require("../parsers/rules/xml5/xml5RuleRunner");
const xml6RuleRunner_1 = require("../parsers/rules/xml6/xml6RuleRunner");
const xml7RuleRunner_1 = require("../parsers/rules/xml7/xml7RuleRunner");
const xml8RuleRunner_1 = require("../parsers/rules/xml8/xml8RuleRunner");
const xml9RuleRunner_1 = require("../parsers/rules/xml9/xml9RuleRunner");
const xml10RuleRunner_1 = require("../parsers/rules/xml10/xml10RuleRunner");
const xml11RuleRunner_1 = require("../parsers/rules/xml11/xml11RuleRunner");
const xml13RuleRunner_1 = require("../parsers/rules/xml13/xml13RuleRunner");
const xml14RuleRunner_1 = require("../parsers/rules/xml14/xml14RuleRunner");
const xml15RuleRunner_1 = require("../parsers/rules/xml15/xml15RuleRunner");
let CheckXmlService = class CheckXmlService {
    checkXml(base64Xml) {
        try {
            if (!base64Xml || !base64Xml.trim()) {
                return {
                    code: 400,
                    message: 'Base64 XML rỗng',
                };
            }
            let xmlContent;
            try {
                const buffer = Buffer.from(base64Xml, 'base64');
                const base64Regex = /^[a-zA-Z0-9+/]*={0,2}$/;
                const cleanedBase64 = base64Xml.replace(/[\r\n\s]/g, '');
                if (!base64Regex.test(cleanedBase64) || cleanedBase64.length % 4 !== 0) {
                    return {
                        code: 400,
                        message: 'Base64 XML không hợp lệ',
                    };
                }
                xmlContent = buffer.toString('utf-8');
            }
            catch (e) {
                return {
                    code: 400,
                    message: 'Base64 XML không hợp lệ',
                };
            }
            let doc;
            try {
                const cleanedXml = xmlContent.replace(/^[\uFEFF\u200B\u0000]+/, '').trim();
                const parser = new xmldom_1.DOMParser({
                    errorHandler: {
                        warning: () => { },
                        error: () => { },
                        fatalError: () => { },
                    }
                });
                doc = parser.parseFromString(cleanedXml, 'text/xml');
                if (!doc || !doc.documentElement || doc.documentElement.nodeName === 'parsererror') {
                    return {
                        code: 400,
                        message: 'XML tổng không hợp lệ',
                    };
                }
            }
            catch (e) {
                return {
                    code: 400,
                    message: 'XML tổng không hợp lệ',
                };
            }
            const contextsByMaLk = new Map();
            let hoSoIndex = 0;
            const hoSoNodes = this.getElementsByTagNameLocal(doc, 'HOSO');
            for (const hoSo of hoSoNodes) {
                const fallbackKey = `__IDX_${hoSoIndex++}`;
                const fileNodes = this.getElementsByTagNameLocal(hoSo, 'FILEHOSO');
                for (const file of fileNodes) {
                    const loaiHoSoRawEl = this.getFirstChildElementLocal(file, 'LOAIHOSO');
                    const loaiHoSoRaw = loaiHoSoRawEl?.textContent?.trim() || null;
                    const loaiHoSo = this.normalizeLoaiHoSo(loaiHoSoRaw);
                    const noiDungBase64El = this.getFirstChildElementLocal(file, 'NOIDUNGFILE');
                    const noiDungBase64 = noiDungBase64El?.textContent?.trim() || null;
                    if (!loaiHoSo || !noiDungBase64 || !noiDungBase64.trim()) {
                        continue;
                    }
                    let xmlChild;
                    try {
                        const base64Regex = /^[a-zA-Z0-9+/]*={0,2}$/;
                        const cleanedChildB64 = noiDungBase64.replace(/[\r\n\s]/g, '');
                        if (!base64Regex.test(cleanedChildB64) || cleanedChildB64.length % 4 !== 0) {
                            continue;
                        }
                        xmlChild = Buffer.from(noiDungBase64, 'base64').toString('utf-8');
                    }
                    catch (e) {
                        continue;
                    }
                    const parser = xml_parser_factory_1.XmlParserFactory.getParser(loaiHoSo);
                    if (!parser)
                        continue;
                    const parsed = parser.parse(xmlChild);
                    const maLk = this.extractMaLk(loaiHoSo, parsed);
                    const ctxKey = maLk && maLk.trim() ? maLk.trim() : fallbackKey;
                    let context = contextsByMaLk.get(ctxKey.toLowerCase());
                    if (!context) {
                        context = new hoso_context_1.HoSoContext();
                        contextsByMaLk.set(ctxKey.toLowerCase(), context);
                    }
                    switch (loaiHoSo) {
                        case 'XML1':
                            context.xml1 = parsed;
                            break;
                        case 'XML2':
                            context.xml2 = this.mergeList(context.xml2, parsed);
                            break;
                        case 'XML3':
                            context.xml3 = this.mergeList(context.xml3, parsed);
                            break;
                        case 'XML4':
                            context.xml4 = this.mergeList(context.xml4, parsed);
                            break;
                        case 'XML5':
                            context.xml5 = this.mergeList(context.xml5, parsed);
                            break;
                        case 'XML6':
                            context.xml6 = this.mergeList(context.xml6, parsed);
                            break;
                        case 'XML7':
                            context.xml7 = parsed;
                            break;
                        case 'XML8':
                            context.xml8 = parsed;
                            break;
                        case 'XML9':
                            context.xml9 = this.mergeList(context.xml9, parsed);
                            break;
                        case 'XML10':
                            context.xml10 = parsed;
                            break;
                        case 'XML11':
                            context.xml11 = parsed;
                            break;
                        case 'XML13':
                            context.xml13 = parsed;
                            break;
                        case 'XML14':
                            context.xml14 = parsed;
                            break;
                        case 'XML15':
                            context.xml15 = this.mergeList(context.xml15, parsed);
                            break;
                    }
                }
            }
            const hoSoContexts = Array.from(contextsByMaLk.values());
            const xmlErrors = [];
            for (const ctx of hoSoContexts) {
                if (ctx.xml1) {
                    const errs = xml1RuleRunner_1.Xml1RuleRunner.run(ctx.xml1, ctx);
                    if (errs.length > 0) {
                        xmlErrors.push({ type: 'XML1', details: errs });
                    }
                }
                if (ctx.xml2 && ctx.xml2.length > 0) {
                    const errs = xml2RuleRunner_1.Xml2RuleRunner.run(ctx.xml2, ctx);
                    if (errs.length > 0) {
                        xmlErrors.push({ type: 'XML2', details: errs });
                    }
                }
                if (ctx.xml3 && ctx.xml3.length > 0) {
                    const errs = xml3RuleRunner_1.Xml3RuleRunner.run(ctx.xml3, ctx);
                    if (errs.length > 0) {
                        xmlErrors.push({ type: 'XML3', details: errs });
                    }
                }
                if (ctx.xml4 && ctx.xml4.length > 0) {
                    const errs = xml4RuleRunner_1.Xml4RuleRunner.run(ctx.xml4, ctx);
                    if (errs.length > 0) {
                        xmlErrors.push({ type: 'XML4', details: errs });
                    }
                }
                if (ctx.xml5 && ctx.xml5.length > 0) {
                    const errs = xml5RuleRunner_1.Xml5RuleRunner.run(ctx.xml5, ctx);
                    if (errs.length > 0) {
                        xmlErrors.push({ type: 'XML5', details: errs });
                    }
                }
                if (ctx.xml6 && ctx.xml6.length > 0) {
                    const errs = xml6RuleRunner_1.Xml6RuleRunner.run(ctx.xml6, ctx);
                    if (errs.length > 0) {
                        xmlErrors.push({ type: 'XML6', details: errs });
                    }
                }
                if (ctx.xml7) {
                    const errs = xml7RuleRunner_1.Xml7RuleRunner.run(ctx.xml7, ctx);
                    if (errs.length > 0) {
                        xmlErrors.push({ type: 'XML7', details: errs });
                    }
                }
                if (ctx.xml8) {
                    const errs = xml8RuleRunner_1.Xml8RuleRunner.run(ctx.xml8, ctx);
                    if (errs.length > 0) {
                        xmlErrors.push({ type: 'XML8', details: errs });
                    }
                }
                if (ctx.xml9 && ctx.xml9.length > 0) {
                    const errs = xml9RuleRunner_1.Xml9RuleRunner.run(ctx.xml9, ctx);
                    if (errs.length > 0) {
                        xmlErrors.push({ type: 'XML9', details: errs });
                    }
                }
                if (ctx.xml10) {
                    const errs = xml10RuleRunner_1.Xml10RuleRunner.run(ctx.xml10, ctx);
                    if (errs.length > 0) {
                        xmlErrors.push({ type: 'XML10', details: errs });
                    }
                }
                if (ctx.xml11) {
                    const errs = xml11RuleRunner_1.Xml11RuleRunner.run(ctx.xml11, ctx);
                    if (errs.length > 0) {
                        xmlErrors.push({ type: 'XML11', details: errs });
                    }
                }
                if (ctx.xml13) {
                    const errs = xml13RuleRunner_1.Xml13RuleRunner.run(ctx.xml13, ctx);
                    if (errs.length > 0) {
                        xmlErrors.push({ type: 'XML13', details: errs });
                    }
                }
                if (ctx.xml14) {
                    const errs = xml14RuleRunner_1.Xml14RuleRunner.run(ctx.xml14, ctx);
                    if (errs.length > 0) {
                        xmlErrors.push({ type: 'XML14', details: errs });
                    }
                }
                if (ctx.xml15 && ctx.xml15.length > 0) {
                    const errs = xml15RuleRunner_1.Xml15RuleRunner.run(ctx.xml15, ctx);
                    if (errs.length > 0) {
                        xmlErrors.push({ type: 'XML15', details: errs });
                    }
                }
            }
            if (xmlErrors.length > 0) {
                return {
                    code: 422,
                    message: 'Dữ liệu XML không hợp lệ',
                    values: xmlErrors,
                };
            }
            return {
                code: 200,
                message: `XML hợp lệ (${hoSoContexts.length} hồ sơ)`,
                values: null,
            };
        }
        catch (ex) {
            return {
                code: 500,
                message: 'Lỗi hệ thống: ' + ex.message,
            };
        }
    }
    mergeList(target, source) {
        if (!source || source.length === 0)
            return target || [];
        const merged = target ? [...target] : [];
        merged.push(...source);
        return merged;
    }
    extractMaLk(loaiHoSo, parsed) {
        if (!parsed)
            return null;
        if (Array.isArray(parsed)) {
            const item = parsed.find(x => x && x.MA_LK && x.MA_LK.trim().length > 0);
            return item ? item.MA_LK : null;
        }
        return parsed.MA_LK || null;
    }
    normalizeLoaiHoSo(input) {
        if (!input || !input.trim())
            return '';
        let cleaned = input.trim();
        const dotIdx = cleaned.indexOf('.');
        if (dotIdx >= 0) {
            cleaned = cleaned.substring(0, dotIdx);
        }
        cleaned = cleaned.toUpperCase();
        if (!cleaned.startsWith('XML')) {
            cleaned = 'XML' + cleaned.replace(/XML/g, '');
        }
        return cleaned;
    }
    getElementsByTagNameLocal(parent, name) {
        const result = [];
        function traverse(node) {
            if (node.nodeType === 1) {
                const localName = node.localName || node.tagName.split(':').pop();
                if (localName === name) {
                    result.push(node);
                }
            }
            let child = node.firstChild;
            while (child) {
                traverse(child);
                child = child.nextSibling;
            }
        }
        traverse(parent);
        return result;
    }
    getFirstChildElementLocal(parent, name) {
        let child = parent.firstChild;
        while (child) {
            if (child.nodeType === 1) {
                const localName = child.localName || child.tagName.split(':').pop();
                if (localName === name) {
                    return child;
                }
            }
            child = child.nextSibling;
        }
        return null;
    }
};
exports.CheckXmlService = CheckXmlService;
exports.CheckXmlService = CheckXmlService = __decorate([
    (0, common_1.Injectable)()
], CheckXmlService);
//# sourceMappingURL=check-xml.service.js.map