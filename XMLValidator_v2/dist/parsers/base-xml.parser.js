"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseXmlParser = void 0;
const xmldom_1 = require("@xmldom/xmldom");
const date_helper_1 = require("../utils/date.helper");
class BaseXmlParser {
    document = null;
    root = null;
    load(xmlContent) {
        if (!xmlContent)
            return false;
        try {
            const cleanedXml = xmlContent.replace(/^[\uFEFF\u200B\u0000]+/, '').trim();
            const parser = new xmldom_1.DOMParser({
                errorHandler: {
                    warning: () => { },
                    error: () => { },
                    fatalError: () => { },
                }
            });
            this.document = parser.parseFromString(cleanedXml, 'text/xml');
            this.root = this.document.documentElement;
            return this.root !== null && this.root.nodeName !== 'parsererror';
        }
        catch (e) {
            return false;
        }
    }
    S(key) {
        if (!this.root)
            return null;
        const node = this.findDescendant(this.root, key);
        if (!node)
            return null;
        return node.textContent ? node.textContent.trim() : '';
    }
    I(key) {
        const s = this.S(key);
        if (s === null || s === '')
            return null;
        const v = parseInt(s, 10);
        return isNaN(v) ? null : v;
    }
    D(key) {
        const s = this.S(key);
        if (s === null || s === '')
            return null;
        const v = parseFloat(s);
        return isNaN(v) ? null : v;
    }
    DT(key) {
        const s = this.S(key);
        return (0, date_helper_1.parseExactDate)(s);
    }
    isRoot(expectedLocalName) {
        if (!this.root)
            return false;
        const rootName = (this.root.localName || this.root.tagName.split(':').pop())
            .replace(/^[\uFEFF]+/, '')
            .trim();
        return rootName === expectedLocalName;
    }
    findDescendant(node, key) {
        if (node.nodeType === 1) {
            const localName = node.localName || node.tagName.split(':').pop();
            if (localName === key) {
                return node;
            }
        }
        let child = node.firstChild;
        while (child) {
            const found = this.findDescendant(child, key);
            if (found)
                return found;
            child = child.nextSibling;
        }
        return null;
    }
    findDescendants(node, key) {
        const results = [];
        this.collectDescendants(node, key, results);
        return results;
    }
    collectDescendants(node, key, results) {
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
    findChildren(node, key) {
        const results = [];
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
    getElementText(el, key) {
        const node = this.findDescendant(el, key);
        if (!node)
            return null;
        return node.textContent ? node.textContent.trim() : '';
    }
    getElementInt(el, key) {
        const s = this.getElementText(el, key);
        if (s === null || s === '')
            return null;
        const v = parseInt(s, 10);
        return isNaN(v) ? null : v;
    }
    getElementDecimal(el, key) {
        const s = this.getElementText(el, key);
        if (s === null || s === '')
            return null;
        const v = parseFloat(s);
        return isNaN(v) ? null : v;
    }
    getElementDate(el, key) {
        const s = this.getElementText(el, key);
        return (0, date_helper_1.parseExactDate)(s);
    }
}
exports.BaseXmlParser = BaseXmlParser;
//# sourceMappingURL=base-xml.parser.js.map