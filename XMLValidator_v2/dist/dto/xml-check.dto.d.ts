export declare class RequestModelData {
    base64Xml: string;
}
export declare class RequestModel {
    data: RequestModelData;
}
export declare class ErrorDetails {
    key: string;
    message: string;
    ruleId?: string;
    severity?: string;
    reference?: string;
}
export declare class XMLError {
    type: string;
    details: ErrorDetails[];
}
export declare class ResponseModel {
    code: number;
    message: string;
    values?: XMLError[] | null;
}
