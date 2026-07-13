import { Injectable } from '@nestjs/common';
import { DOMParser } from '@xmldom/xmldom';
import { ResponseModel, XMLError, ErrorDetails } from '../dto/xml-check.dto';
import { XmlParserFactory } from '../parsers/xml-parser.factory';
import { HoSoContext } from './hoso-context';

import { Xml1RuleRunner } from '../parsers/rules/xml1/xml1RuleRunner';
import { Xml2RuleRunner } from '../parsers/rules/xml2/xml2RuleRunner';
import { Xml3RuleRunner } from '../parsers/rules/xml3/xml3RuleRunner';
import { Xml4RuleRunner } from '../parsers/rules/xml4/xml4RuleRunner';
import { Xml5RuleRunner } from '../parsers/rules/xml5/xml5RuleRunner';
import { Xml6RuleRunner } from '../parsers/rules/xml6/xml6RuleRunner';
import { Xml7RuleRunner } from '../parsers/rules/xml7/xml7RuleRunner';
import { Xml8RuleRunner } from '../parsers/rules/xml8/xml8RuleRunner';
import { Xml9RuleRunner } from '../parsers/rules/xml9/xml9RuleRunner';
import { Xml10RuleRunner } from '../parsers/rules/xml10/xml10RuleRunner';
import { Xml11RuleRunner } from '../parsers/rules/xml11/xml11RuleRunner';
import { Xml13RuleRunner } from '../parsers/rules/xml13/xml13RuleRunner';
import { Xml14RuleRunner } from '../parsers/rules/xml14/xml14RuleRunner';
import { Xml15RuleRunner } from '../parsers/rules/xml15/xml15RuleRunner';

@Injectable()
export class CheckXmlService {
  public checkXml(base64Xml: string): ResponseModel {
    try {
      if (!base64Xml || !base64Xml.trim()) {
        return {
          code: 400,
          message: 'Base64 XML rỗng',
        };
      }

      // 1. Decode XML tổng
      let xmlContent: string;
      try {
        const buffer = Buffer.from(base64Xml, 'base64');
        // Validate if it is correct base64 by comparing re-encoded value or catching error
        // Buffer.from doesn't throw on non-base64, it just ignores invalid chars.
        // C# Convert.FromBase64String throws FormatException on invalid characters.
        // Let's verify base64 regex to match C# strict parsing
        const base64Regex = /^[a-zA-Z0-9+/]*={0,2}$/;
        const cleanedBase64 = base64Xml.replace(/[\r\n\s]/g, '');
        if (!base64Regex.test(cleanedBase64) || cleanedBase64.length % 4 !== 0) {
          return {
            code: 400,
            message: 'Base64 XML không hợp lệ',
          };
        }
        xmlContent = buffer.toString('utf-8');
      } catch (e) {
        return {
          code: 400,
          message: 'Base64 XML không hợp lệ',
        };
      }

      // 2. Parse XML tổng
      let doc: any;
      try {
        const cleanedXml = xmlContent.replace(/^[\uFEFF\u200B\u0000]+/, '').trim();
        const parser = new DOMParser({
          errorHandler: {
            warning: () => {},
            error: () => {},
            fatalError: () => {},
          }
        });
        doc = parser.parseFromString(cleanedXml, 'text/xml');
        if (!doc || !doc.documentElement || doc.documentElement.nodeName === 'parsererror') {
          return {
            code: 400,
            message: 'XML tổng không hợp lệ',
          };
        }
      } catch (e) {
        return {
          code: 400,
          message: 'XML tổng không hợp lệ',
        };
      }

      // 3. Parse từng hồ sơ
      const contextsByMaLk: Map<string, HoSoContext> = new Map();
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

          let xmlChild: string;
          try {
            // Child Base64 check
            const base64Regex = /^[a-zA-Z0-9+/]*={0,2}$/;
            const cleanedChildB64 = noiDungBase64.replace(/[\r\n\s]/g, '');
            if (!base64Regex.test(cleanedChildB64) || cleanedChildB64.length % 4 !== 0) {
              continue;
            }
            xmlChild = Buffer.from(noiDungBase64, 'base64').toString('utf-8');
          } catch (e) {
            continue;
          }

          const parser = XmlParserFactory.getParser(loaiHoSo);
          if (!parser) continue;

          const parsed = parser.parse(xmlChild);
          const maLk = this.extractMaLk(loaiHoSo, parsed);
          const ctxKey = maLk && maLk.trim() ? maLk.trim() : fallbackKey;

          let context = contextsByMaLk.get(ctxKey.toLowerCase());
          if (!context) {
            context = new HoSoContext();
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

      // 4. RUN RULE ENGINE
      const xmlErrors: XMLError[] = [];
      for (const ctx of hoSoContexts) {
        // XML1
        if (ctx.xml1) {
          const errs = Xml1RuleRunner.run(ctx.xml1, ctx);
          if (errs.length > 0) {
            xmlErrors.push({ type: 'XML1', details: errs });
          }
        }
        // XML2
        if (ctx.xml2 && ctx.xml2.length > 0) {
          const errs = Xml2RuleRunner.run(ctx.xml2, ctx);
          if (errs.length > 0) {
            xmlErrors.push({ type: 'XML2', details: errs });
          }
        }
        // XML3
        if (ctx.xml3 && ctx.xml3.length > 0) {
          const errs = Xml3RuleRunner.run(ctx.xml3, ctx);
          if (errs.length > 0) {
            xmlErrors.push({ type: 'XML3', details: errs });
          }
        }
        // XML4
        if (ctx.xml4 && ctx.xml4.length > 0) {
          const errs = Xml4RuleRunner.run(ctx.xml4, ctx);
          if (errs.length > 0) {
            xmlErrors.push({ type: 'XML4', details: errs });
          }
        }
        // XML5
        if (ctx.xml5 && ctx.xml5.length > 0) {
          const errs = Xml5RuleRunner.run(ctx.xml5, ctx);
          if (errs.length > 0) {
            xmlErrors.push({ type: 'XML5', details: errs });
          }
        }
        // XML6
        if (ctx.xml6 && ctx.xml6.length > 0) {
          const errs = Xml6RuleRunner.run(ctx.xml6, ctx);
          if (errs.length > 0) {
            xmlErrors.push({ type: 'XML6', details: errs });
          }
        }
        // XML7
        if (ctx.xml7) {
          const errs = Xml7RuleRunner.run(ctx.xml7, ctx);
          if (errs.length > 0) {
            xmlErrors.push({ type: 'XML7', details: errs });
          }
        }
        // XML8
        if (ctx.xml8) {
          const errs = Xml8RuleRunner.run(ctx.xml8, ctx);
          if (errs.length > 0) {
            xmlErrors.push({ type: 'XML8', details: errs });
          }
        }
        // XML9
        if (ctx.xml9 && ctx.xml9.length > 0) {
          const errs = Xml9RuleRunner.run(ctx.xml9, ctx);
          if (errs.length > 0) {
            xmlErrors.push({ type: 'XML9', details: errs });
          }
        }
        // XML10
        if (ctx.xml10) {
          const errs = Xml10RuleRunner.run(ctx.xml10, ctx);
          if (errs.length > 0) {
            xmlErrors.push({ type: 'XML10', details: errs });
          }
        }
        // XML11
        if (ctx.xml11) {
          const errs = Xml11RuleRunner.run(ctx.xml11, ctx);
          if (errs.length > 0) {
            xmlErrors.push({ type: 'XML11', details: errs });
          }
        }
        // XML13
        if (ctx.xml13) {
          const errs = Xml13RuleRunner.run(ctx.xml13, ctx);
          if (errs.length > 0) {
            xmlErrors.push({ type: 'XML13', details: errs });
          }
        }
        // XML14
        if (ctx.xml14) {
          const errs = Xml14RuleRunner.run(ctx.xml14, ctx);
          if (errs.length > 0) {
            xmlErrors.push({ type: 'XML14', details: errs });
          }
        }
        // XML15
        if (ctx.xml15 && ctx.xml15.length > 0) {
          const errs = Xml15RuleRunner.run(ctx.xml15, ctx);
          if (errs.length > 0) {
            xmlErrors.push({ type: 'XML15', details: errs });
          }
        }
      }

      // 5. TRẢ KẾT QUẢ
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

    } catch (ex) {
      return {
        code: 500,
        message: 'Lỗi hệ thống: ' + ex.message,
      };
    }
  }

  // =========================
  // HELPERS
  // =========================

  private mergeList<T>(target: T[] | undefined, source: T[]): T[] {
    if (!source || source.length === 0) return target || [];
    const merged = target ? [...target] : [];
    merged.push(...source);
    return merged;
  }

  private extractMaLk(loaiHoSo: string, parsed: any): string | null {
    if (!parsed) return null;
    if (Array.isArray(parsed)) {
      const item = parsed.find(x => x && x.MA_LK && x.MA_LK.trim().length > 0);
      return item ? item.MA_LK : null;
    }
    return parsed.MA_LK || null;
  }

  private normalizeLoaiHoSo(input: string | null): string {
    if (!input || !input.trim()) return '';
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

  private getElementsByTagNameLocal(parent: any, name: string): any[] {
    const result: any[] = [];
    function traverse(node: any) {
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

  private getFirstChildElementLocal(parent: any, name: string): any {
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
}
