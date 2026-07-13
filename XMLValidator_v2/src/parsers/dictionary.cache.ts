import { Injectable, OnModuleInit, Logger } from '@nestjs/common';
import * as fs from 'fs';
import * as path from 'path';

@Injectable()
export class DictionaryCache implements OnModuleInit {
  private readonly logger = new Logger(DictionaryCache.name);

  public maQuocTich: Record<string, string> = {};
  public maDanToc: Record<string, string> = {};
  public doiTuongBHYT: Record<string, string> = {};
  public doiTuongKCB: Record<string, string> = {};
  public ketQuaDTri: Record<string, string> = {};
  public maLoaiRV: Record<string, string> = {};

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

  private load(fileName: string): Record<string, string> {
    const pathsToTry = [
      // When running compiled code in dist
      path.join(__dirname, '..', 'resources', 'dictionaries', fileName),
      // When running via ts-node from project root
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
        } catch (e) {
          this.logger.error(`Error parsing dictionary ${fileName} at ${p}:`, e);
        }
      }
    }

    this.logger.warn(`Dictionary file ${fileName} not found. Searched paths: ${pathsToTry.join(', ')}`);
    return {};
  }
}
export const DictionaryCacheInstance = new DictionaryCache();
DictionaryCacheInstance.onModuleInit();
