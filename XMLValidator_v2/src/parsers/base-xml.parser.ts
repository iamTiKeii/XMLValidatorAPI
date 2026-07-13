import { DOMParser } from '@xmldom/xmldom';
import { parseExactDate } from '../utils/date.helper';

export abstract class BaseXmlParser {
  protected document: any = null;
  protected root: any = null;

  public abstract get loaiHoSo(): string;
  public abstract parse(xmlContent: string): any;

  protected load(xmlContent: string): boolean {
    if (!xmlContent) return false;

    try {
      // Handle BOM characters
      const cleanedXml = xmlContent.replace(/^[\uFEFF\u200B\u0000]+/, '').trim();
      
      const parser = new DOMParser({
        errorHandler: {
          warning: () => {},
          error: () => {},
          fatalError: () => {},
        }
      });
      this.document = parser.parseFromString(cleanedXml, 'text/xml');
      this.root = this.document.documentElement;
      
      return this.root !== null && this.root.nodeName !== 'parsererror';
    } catch (e) {
      return false;
    }
  }

  // =========================
  // HELPER CORE (CHUẨN HOÁ)
  // =========================

  protected S(key: string): string | null {
    if (!this.root) return null;
    const node = this.findDescendant(this.root, key);
    if (!node) return null;
    return node.textContent ? node.textContent.trim() : '';
  }

  protected I(key: string): number | null {
    const s = this.S(key);
    if (s === null || s === '') return null;
    const v = parseInt(s, 10);
    return isNaN(v) ? null : v;
  }

  protected D(key: string): number | null {
    const s = this.S(key);
    if (s === null || s === '') return null;
    const v = parseFloat(s);
    return isNaN(v) ? null : v;
  }

  protected DT(key: string): Date | null {
    const s = this.S(key);
    return parseExactDate(s);
  }

  // =========================
  // HELPER ROOT CHECK
  // =========================

  protected isRoot(expectedLocalName: string): boolean {
    if (!this.root) return false;
    const rootName = (this.root.localName || this.root.tagName.split(':').pop())
      .replace(/^[\uFEFF]+/, '')
      .trim();
    return rootName === expectedLocalName;
  }

  // =========================
  // DOM TRAVERSAL HELPERS
  // =========================

  protected findDescendant(node: any, key: string): any {
    if (node.nodeType === 1) {
      const localName = node.localName || node.tagName.split(':').pop();
      if (localName === key) {
        return node;
      }
    }
    let child = node.firstChild;
    while (child) {
      const found = this.findDescendant(child, key);
      if (found) return found;
      child = child.nextSibling;
    }
    return null;
  }

  protected findDescendants(node: any, key: string): any[] {
    const results: any[] = [];
    this.collectDescendants(node, key, results);
    return results;
  }

  private collectDescendants(node: any, key: string, results: any[]) {
    if (node.nodeType === 1) {
      const localName = node.localName || node.tagName.split(':').pop();
      if (localName === key) {
        results.push(node);
      }
    }
    let child = node.firstChild;
    while (child) {
      this.collectDescendants(child, key, results);
      child = child.nextSibling;
    }
  }

  protected findChildren(node: any, key: string): any[] {
    const results: any[] = [];
    let child = node.firstChild;
    while (child) {
      if (child.nodeType === 1) {
        const localName = child.localName || child.tagName.split(':').pop();
        if (localName === key) {
          results.push(child);
        }
      }
      child = child.nextSibling;
    }
    return results;
  }

  // Helper inside specific elements
  protected getElementText(el: any, key: string): string | null {
    const node = this.findDescendant(el, key);
    if (!node) return null;
    return node.textContent ? node.textContent.trim() : '';
  }

  protected getElementInt(el: any, key: string): number | null {
    const s = this.getElementText(el, key);
    if (s === null || s === '') return null;
    const v = parseInt(s, 10);
    return isNaN(v) ? null : v;
  }

  protected getElementDecimal(el: any, key: string): number | null {
    const s = this.getElementText(el, key);
    if (s === null || s === '') return null;
    const v = parseFloat(s);
    return isNaN(v) ? null : v;
  }

  protected getElementDate(el: any, key: string): Date | null {
    const s = this.getElementText(el, key);
    return parseExactDate(s);
  }
}
