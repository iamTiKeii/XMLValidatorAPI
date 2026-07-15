import { Xml1RuleRunner } from './xml1RuleRunner';
import { HoSoContext } from '../../../services/hoso-context';
import { Xml1Model } from '../../../interfaces/xml-models.interface';
import { RulesConfigRegistry } from '../rules.config';
import { Check_T_VTYT } from './Check_T_VTYT';
import { Check_SO_NGAY_DTRI } from './Check_SO_NGAY_DTRI';

describe('XML1 Rules Engine', () => {
  let context: HoSoContext;
  let registry: RulesConfigRegistry;

  beforeEach(() => {
    context = new HoSoContext();
    registry = RulesConfigRegistry.getInstance();
    registry.clearConfig();
  });

  afterEach(() => {
    registry.clearConfig();
  });

  it('should skip disabled rules in Xml1RuleRunner', () => {
    const model: Xml1Model = {
      MA_LK: '', // This should trigger RULE_XML1_MA_LK_01
    };

    // First check: rule is enabled by default, so it should report error
    const errors1 = Xml1RuleRunner.run(model, context);
    const maLkError1 = errors1.find(e => e.ruleId === 'RULE_XML1_MA_LK_01');
    expect(maLkError1).toBeDefined();

    // Disable the rule
    registry.setRuleConfig('RULE_XML1_MA_LK_01', { enabled: false });

    // Second check: rule is disabled, so it should not report error
    const errors2 = Xml1RuleRunner.run(model, context);
    const maLkError2 = errors2.find(e => e.ruleId === 'RULE_XML1_MA_LK_01');
    expect(maLkError2).toBeUndefined();
  });

  it('should override error message and severity from config', () => {
    const model: Xml1Model = {
      MA_LK: '', // Trigger error
    };

    // Override config
    registry.setRuleConfig('RULE_XML1_MA_LK_01', {
      enabled: true,
      severity: 'WARNING',
      customErrorMessage: 'Mã liên kết hồ sơ bắt buộc nhập',
    });

    const errors = Xml1RuleRunner.run(model, context);
    const err = errors.find(e => e.ruleId === 'RULE_XML1_MA_LK_01');
    expect(err).toBeDefined();
    expect(err!.message).toBe('Mã liên kết hồ sơ bắt buộc nhập');
    expect((err as any).severity).toBe('WARNING');
  });

  describe('Check_T_VTYT rule', () => {
    let rule: Check_T_VTYT;

    beforeEach(() => {
      rule = new Check_T_VTYT();
    });

    it('should pass if T_VTYT matches sum of XML3 VTYT items', () => {
      const model: Xml1Model = {
        T_VTYT: 50000,
      };
      
      context.xml3 = [
        {
          MA_VAT_TU: 'VTYT_01', // A VTYT item
          THANH_TIEN_BV: 30000,
        },
        {
          MA_VAT_TU: 'VTYT_02', // A VTYT item
          THANH_TIEN_BV: 20000,
        },
        {
          MA_DICH_VU: 'DVKT_01', // A DVKT item (no MA_VAT_TU)
          THANH_TIEN_BV: 100000, // Should be ignored in VTYT sum
        }
      ];

      const err = rule.check(model, context);
      expect(err).toBeNull();
    });

    it('should fail if T_VTYT does not match sum of XML3 VTYT items', () => {
      const model: Xml1Model = {
        T_VTYT: 60000, // Lệch
      };
      
      context.xml3 = [
        {
          MA_VAT_TU: 'VTYT_01',
          THANH_TIEN_BV: 30000,
        }
      ];

      const err = rule.check(model, context);
      expect(err).not.toBeNull();
      expect(err!.message).toContain('không bằng tổng tiền vật tư XML3');
    });

    it('should pass if T_VTYT is 0 and there are no VTYT items (only DVKT)', () => {
      const model: Xml1Model = {
        T_VTYT: 0,
      };
      
      context.xml3 = [
        {
          MA_DICH_VU: 'DVKT_01',
          THANH_TIEN_BV: 100000,
        }
      ];

      const err = rule.check(model, context);
      expect(err).toBeNull();
    });
  });

  describe('Check_SO_NGAY_DTRI rule', () => {
    let rule: Check_SO_NGAY_DTRI;

    beforeEach(() => {
      rule = new Check_SO_NGAY_DTRI();
    });

    it('should enforce SO_NGAY_DTRI === 0 for MA_LOAI_KCB in ("01", "07", "09")', () => {
      const model: Xml1Model = {
        MA_LOAI_KCB: '01',
        SO_NGAY_DTRI_RAW: '0',
      };
      expect(rule.check(model, context)).toBeNull();

      model.SO_NGAY_DTRI_RAW = '2'; // invalid
      const err = rule.check(model, context);
      expect(err).not.toBeNull();
      expect(err!.message).toBe('SO_NGAY_DTRI phải bằng 0 khi MA_LOAI_KCB ∈ (01,07,09)');
    });

    it('should validate SO_NGAY_DTRI = (NGAY_RA - NGAY_VAO) + 1 for MA_LOAI_KCB in ("02", "03", "04", "06")', () => {
      const model: Xml1Model = {
        MA_LOAI_KCB: '03',
        NGAY_VAO: new Date(2024, 11, 25), // Dec 25
        NGAY_RA: new Date(2024, 11, 28),  // Dec 28
        SO_NGAY_DTRI_RAW: '4', // expected (28 - 25) + 1 = 4
      };
      expect(rule.check(model, context)).toBeNull();

      model.SO_NGAY_DTRI_RAW = '3'; // invalid
      const err = rule.check(model, context);
      expect(err).not.toBeNull();
      expect(err!.message).toContain('SO_NGAY_DTRI không đúng công thức');
    });
  });
});
