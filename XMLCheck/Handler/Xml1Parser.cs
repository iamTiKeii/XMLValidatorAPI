using System.Xml.Linq;
using XMLCheck.Models;

namespace XMLCheck.Handler
{
    public class Xml1Parser:BaseXmlParser,IXmlParser
    {
        public string LoaiHoSo => "XML1";

        public object Parse(string xmlContent)
        {
            var model = new Xml1Model();

            // ✅ GỌI BaseXmlParser
            if (!Load(xmlContent))
                return model;

            if (!IsRoot("TONG_HOP"))
                return model;
            model.MA_LK = S("MA_LK");
            model.STT = I("STT");
            model.MA_BN = S("MA_BN");
            model.HO_TEN = S("HO_TEN");
            model.SO_CCCD = S("SO_CCCD");
            model.NGAY_SINH = DT("NGAY_SINH");
            model.GIOI_TINH = I("GIOI_TINH");
            model.NHOM_MAU = S("NHOM_MAU");
            model.MA_QUOCTICH = S("MA_QUOCTICH");
            model.MA_DANTOC = S("MA_DANTOC");
            model.MA_NGHE_NGHIEP = S("MA_NGHE_NGHIEP");

            model.DIA_CHI = S("DIA_CHI");
            model.MATINH_CU_TRU = S("MATINH_CU_TRU");
            model.MAHUYEN_CU_TRU = S("MAHUYEN_CU_TRU");
            model.MAXA_CU_TRU = S("MAXA_CU_TRU");
            model.DIEN_THOAI = S("DIEN_THOAI");

            model.MA_THE_BHYT = S("MA_THE_BHYT");
            model.MA_DKBD = S("MA_DKBD");
            model.GT_THE_TU = DT("GT_THE_TU");
            model.GT_THE_DEN = DT("GT_THE_DEN");
            model.NGAY_MIEN_CCT = DT("NGAY_MIEN_CCT");

            model.LY_DO_VV = S("LY_DO_VV");
            model.LY_DO_VNT = S("LY_DO_VNT");
            model.MA_LY_DO_VNT = S("MA_LY_DO_VNT");
            model.CHAN_DOAN_VAO = S("CHAN_DOAN_VAO");
            model.CHAN_DOAN_RV = S("CHAN_DOAN_RV");

            model.MA_BENH_CHINH = S("MA_BENH_CHINH");
            model.MA_BENH_KT = S("MA_BENH_KT");
            model.MA_BENH_YHCT = S("MA_BENH_YHCT");
            model.MA_PTTT_QT = S("MA_PTTT_QT");

            model.MA_DOITUONG_KCB = S("MA_DOITUONG_KCB");
            model.MA_NOI_DI = S("MA_NOI_DI");
            model.MA_NOI_DEN = S("MA_NOI_DEN");
            model.MA_TAI_NAN = S("MA_TAI_NAN");

            model.NGAY_VAO = DT("NGAY_VAO");
            model.NGAY_VAO_NOI_TRU = DT("NGAY_VAO_NOI_TRU");
            model.NGAY_VAO_NOI_TRU_RAW = S("NGAY_VAO_NOI_TRU");
            model.NGAY_RA = DT("NGAY_RA");
            model.GIAY_CHUYEN_TUYEN = S("GIAY_CHUYEN_TUYEN");
            model.SO_NGAY_DTRI = I("SO_NGAY_DTRI");
            model.NGAY_RA_RAW = S("NGAY_RA"); 
            model.NGAY_VAO_RAW = S("NGAY_VAO");
            model.PP_DIEU_TRI = S("PP_DIEU_TRI");
            model.KET_QUA_DTRI = S("KET_QUA_DTRI");
            model.MA_LOAI_RV = S("MA_LOAI_RV");
            model.GHI_CHU = S("GHI_CHU");
            model.SO_NGAY_DTRI_RAW = S("SO_NGAY_DTRI");
            model.NGAY_TTOAN = DT("NGAY_TTOAN");
            model.T_THUOC = D("T_THUOC");
            model.T_VTYT = D("T_VTYT");
            model.T_TONGCHI_BV = D("T_TONGCHI_BV");
            model.T_TONGCHI_BH = D("T_TONGCHI_BH");
            model.T_BNTT = D("T_BNTT");
            model.T_BNCCT = D("T_BNCCT");
            model.T_BHTT = D("T_BHTT");
            model.T_NGUONKHAC = D("T_NGUONKHAC");
            model.T_BHTT_GDV = D("T_BHTT_GDV");

            model.NAM_QT = I("NAM_QT");
            model.THANG_QT = I("THANG_QT");

            model.MA_LOAI_KCB = S("MA_LOAI_KCB");
            model.MA_KHOA = S("MA_KHOA");
            model.MA_CSKCB = S("MA_CSKCB");
            model.MA_KHUVUC = S("MA_KHUVUC");

            model.CAN_NANG = D("CAN_NANG");
            model.CAN_NANG_CON = D("CAN_NANG_CON");
            model.NAM_NAM_LIEN_TUC = I("NAM_NAM_LIEN_TUC");

            model.NGAY_TAI_KHAM = DT("NGAY_TAI_KHAM");
            model.MA_HSBA = S("MA_HSBA");
            model.MA_TTDV = S("MA_TTDV");
            model.DU_PHONG = S("DU_PHONG");
            return model;
        }
       
    }

}
