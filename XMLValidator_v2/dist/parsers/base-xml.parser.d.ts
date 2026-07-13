export declare abstract class BaseXmlParser {
    protected document: any;
    protected root: any;
    abstract get loaiHoSo(): string;
    abstract parse(xmlContent: string): any;
    protected load(xmlContent: string): boolean;
    protected S(key: string): string | null;
    protected I(key: string): number | null;
    protected D(key: string): number | null;
    protected DT(key: string): Date | null;
    protected isRoot(expectedLocalName: string): boolean;
    protected findDescendant(node: any, key: string): any;
    protected findDescendants(node: any, key: string): any[];
    private collectDescendants;
    protected findChildren(node: any, key: string): any[];
    protected getElementText(el: any, key: string): string | null;
    protected getElementInt(el: any, key: string): number | null;
    protected getElementDecimal(el: any, key: string): number | null;
    protected getElementDate(el: any, key: string): Date | null;
}
