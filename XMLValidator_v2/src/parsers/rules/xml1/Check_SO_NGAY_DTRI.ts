import { Xml1RuleBase } from './xml1RuleBase';
import { Xml1Model } from '../../../interfaces/xml-models.interface';
import { HoSoContext } from '../../../services/hoso-context';
import { ErrorDetails } from '../../../dto/xml-check.dto';

export class Check_SO_NGAY_DTRI extends Xml1RuleBase {
  constructor() {
    super({
      ruleId: 'RULE_XML1_SO_NGAY_DTRI_01',
      xmlType: 'XML1',
      field: 'SO_NGAY_DTRI',
      severity: 'ERROR',
      description: 'Kiểm tra quy định tính số ngày điều trị dựa trên loại KCB và ngày vào/ra',
      errorMessage: 'SO_NGAY_DTRI không được để trống',
      reference: 'QĐ 3176/QĐ-BYT',
    });
  }

  public check(model: Xml1Model, context: HoSoContext): ErrorDetails | null {
    const raw = model.SO_NGAY_DTRI_RAW;

    if (!raw || !raw.trim()) {
      return this.error('SO_NGAY_DTRI không được để trống');
    }

    const soNgay = parseInt(raw.trim(), 10);
    if (isNaN(soNgay)) {
      return this.error('SO_NGAY_DTRI sai kiểu dữ liệu (số)');
    }

    if (model.MA_LOAI_KCB === '01' || model.MA_LOAI_KCB === '07' || model.MA_LOAI_KCB === '09') {
      if (soNgay !== 0) {
        return this.error('SO_NGAY_DTRI phải bằng 0 khi MA_LOAI_KCB ∈ (01,07,09)');
      }
      return null;
    }

    if (model.MA_LOAI_KCB === '02' || model.MA_LOAI_KCB === '03' || model.MA_LOAI_KCB === '04' || model.MA_LOAI_KCB === '06') {
      if (!model.NGAY_VAO || !model.NGAY_RA) {
        return this.error('Không đủ dữ liệu NGAY_VAO / NGAY_RA để tính SO_NGAY_DTRI');
      }

      const dateRa = new Date(model.NGAY_RA.getFullYear(), model.NGAY_RA.getMonth(), model.NGAY_RA.getDate());
      const dateVao = new Date(model.NGAY_VAO.getFullYear(), model.NGAY_VAO.getMonth(), model.NGAY_VAO.getDate());
      const expected = Math.round((dateRa.getTime() - dateVao.getTime()) / (1000 * 60 * 60 * 24)) + 1;

      if (expected < 0) {
        return this.error('NGAY_RA không hợp lệ so với NGAY_VAO');
      }

      if (soNgay !== expected) {
        return this.error(`SO_NGAY_DTRI không đúng công thức: (NGAY_RA - NGAY_VAO) + 1 = ${expected}`);
      }
    }

    return null;
  }
}
