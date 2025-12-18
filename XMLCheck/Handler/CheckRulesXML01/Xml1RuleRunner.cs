using XMLCheck.Handler.CheckRulesXML01;
using XMLCheck.Models;
using XMLCheck.Services;

namespace XMLCheck.Handler.CheckRulesXML1
{
    public static class Xml1RuleRunner
    {
        private static readonly List<IXml1Rule> _rules = new()
        {
            new Check_MA_LK(),
            new Check_HO_TEN(),
            new Check_SO_CCCD(),
            new Check_NGAY_SINH(),
            new Check_GIOI_TINH(),
            new Check_MA_QUOCTICH(),
            new Check_MA_NGHE_NGHIEP(),
            new Check_MA_DANTOC(),
            new Check_DIA_CHI(),
            new Check_MATINH_CU_TRU(),
            new Check_MAXA_CU_TRU(),
            new Check_MA_THE_BHYT(),
            new Check_GT_THE_TU(),
            new Check_GT_THE_DEN(),
            new Check_NGAY_MIEN_CCT(),
            new Check_LY_DO_VV(),
            new Check_LY_DO_VNT(),
            new Check_MA_LY_DO_VNT(),
            new Check_CHAN_DOAN_VAO(),
            new Check_CHAN_DOAN_RV(),
            new Check_MA_BENH_CHINH(),
            new Check_MA_BENH_KT(),
            new Check_MA_BENH_YHCT(),
            new Check_MA_DOITUONG_KCB(),
            new Check_MA_NOI_DI(),
            new Check_MA_NOI_DEN(),
            new Check_MA_TAI_NAN(),
            new Check_NGAY_VAO_NOI_TRU(),
            new Check_NGAY_RA(),
            new Check_SO_NGAY_DTRI(),
            new Check_PP_DIEU_TRI(),
            new Check_KET_QUA_DTRI(),
            new Check_MA_LOAI_RV(),
            new Check_T_THUOC(),
            new Check_T_VTYT(),
            new Check_T_TONGCHI_BV(),
        };

        public static List<ErrorDetails> Run(Xml1Model model, HoSoContext context)
        {
            var errors = new List<ErrorDetails>();

            foreach (var rule in _rules)
            {
                var err = rule.Check(model, context);
                if (err != null)
                    errors.Add(err);
            }

            return errors;
        }

    }

}
