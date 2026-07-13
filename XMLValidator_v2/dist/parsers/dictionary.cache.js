"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var DictionaryCache_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.DictionaryCacheInstance = exports.DictionaryCache = void 0;
const common_1 = require("@nestjs/common");
const fs = require("fs");
const path = require("path");
let DictionaryCache = DictionaryCache_1 = class DictionaryCache {
    logger = new common_1.Logger(DictionaryCache_1.name);
    maQuocTich = {};
    maDanToc = {};
    doiTuongBHYT = {};
    doiTuongKCB = {};
    ketQuaDTri = {};
    maLoaiRV = {};
    onModuleInit() {
        this.logger.log('Initializing DictionaryCache...');
        this.maQuocTich = this.load('dm_ma_quoctich.json');
        this.maDanToc = this.load('dm_ma_dantoc.json');
        this.doiTuongBHYT = this.load('dm_ma_doituong_bhyt.json');
        this.doiTuongKCB = this.load('dm_ma_doituong_kcb.json');
        this.ketQuaDTri = this.load('dm_ket_qua_dtri.json');
        this.maLoaiRV = this.load('dm_ma_loai_rv.json');
        this.logger.log('DictionaryCache initialized successfully.');
    }
    load(fileName) {
        const pathsToTry = [
            path.join(__dirname, '..', 'resources', 'dictionaries', fileName),
            path.join(process.cwd(), 'src', 'resources', 'dictionaries', fileName),
            path.join(process.cwd(), 'dist', 'resources', 'dictionaries', fileName),
        ];
        for (const p of pathsToTry) {
            if (fs.existsSync(p)) {
                try {
                    const content = fs.readFileSync(p, 'utf-8');
                    const data = JSON.parse(content);
                    this.logger.log(`Loaded dictionary ${fileName} from: ${p} (${Object.keys(data).length} items)`);
                    return data;
                }
                catch (e) {
                    this.logger.error(`Error parsing dictionary ${fileName} at ${p}:`, e);
                }
            }
        }
        this.logger.warn(`Dictionary file ${fileName} not found. Searched paths: ${pathsToTry.join(', ')}`);
        return {};
    }
};
exports.DictionaryCache = DictionaryCache;
exports.DictionaryCache = DictionaryCache = DictionaryCache_1 = __decorate([
    (0, common_1.Injectable)()
], DictionaryCache);
exports.DictionaryCacheInstance = new DictionaryCache();
exports.DictionaryCacheInstance.onModuleInit();
//# sourceMappingURL=dictionary.cache.js.map