import { OnModuleInit } from '@nestjs/common';
export declare class DictionaryCache implements OnModuleInit {
    private readonly logger;
    maQuocTich: Record<string, string>;
    maDanToc: Record<string, string>;
    doiTuongBHYT: Record<string, string>;
    doiTuongKCB: Record<string, string>;
    ketQuaDTri: Record<string, string>;
    maLoaiRV: Record<string, string>;
    onModuleInit(): void;
    private load;
}
export declare const DictionaryCacheInstance: DictionaryCache;
