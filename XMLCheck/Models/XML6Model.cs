namespace XMLCheck.Models
{
    public class Xml6Model
    {// Định danh – cá nhân
        public string? MA_LK { get; set; }
        public string? MA_THE_BHYT { get; set; }
        public string? SO_CCCD { get; set; }
        public DateTime? NGAY_SINH { get; set; }
        public int? GIOI_TINH { get; set; }

        // Địa chỉ
        public string? DIA_CHI { get; set; }
        public string? MATINH_CU_TRU { get; set; }
        public string? MAHUYEN_CU_TRU { get; set; }
        public string? MAXA_CU_TRU { get; set; }

        // HIV – chẩn đoán ban đầu
        public DateTime? NGAYKD_HIV { get; set; }
        public string? NOI_LAY_MAU_XN { get; set; }
        public string? NOI_XN_KD { get; set; }

        // Điều trị ARV
        public string? NOI_BDDT_ARV { get; set; }
        public DateTime? BDDT_ARV { get; set; }
        public string? MA_PHAC_DO_DIEU_TRI_BD { get; set; }
        public string? MA_BAC_PHAC_DO_BD { get; set; }
        public string? MA_LYDO_DTRI { get; set; }

        // Lao
        public string? LOAI_DTRI_LAO { get; set; }
        public string? SANG_LOC_LAO { get; set; }
        public string? PHACDO_DTRI_LAO { get; set; }
        public DateTime? NGAYBD_DTRI_LAO { get; set; }
        public DateTime? NGAYKT_DTRI_LAO { get; set; }
        public string? KQ_DTRI_LAO { get; set; }

        // XN tải lượng virus
        public string? MA_LYDO_XNTL_VR { get; set; }
        public DateTime? NGAY_XN_TLVR { get; set; }
        public string? KQ_XNTL_VR { get; set; }
        public DateTime? NGAY_KQ_XN_TLVR { get; set; }

        // Phân loại BN
        public string? MA_LOAI_BN { get; set; }
        public string? GIAI_DOAN_LAM_SANG { get; set; }
        public string? NHOM_DOI_TUONG { get; set; }
        public string? MA_TINH_TRANG_DK { get; set; }

        // PCR
        public int? LAN_XN_PCR { get; set; }
        public DateTime? NGAY_XN_PCR { get; set; }
        public DateTime? NGAY_KQ_XN_PCR { get; set; }
        public string? MA_KQ_XN_PCR { get; set; }

        // Mang thai
        public DateTime? NGAY_NHAN_TT_MANG_THAI { get; set; }

        // Dự phòng & xử trí
        public DateTime? NGAY_BAT_DAU_DT_CTX { get; set; }
        public string? MA_XU_TRI { get; set; }
        public DateTime? NGAY_BAT_DAU_XU_TRI { get; set; }
        public DateTime? NGAY_KET_THUC_XU_TRI { get; set; }

        // Phác đồ hiện tại
        public string? MA_PHAC_DO_DIEU_TRI { get; set; }
        public string? MA_BAC_PHAC_DO { get; set; }
        public int? SO_NGAY_CAP_THUOC_ARV { get; set; }
        public DateTime? NGAY_CHUYEN_PHAC_DO { get; set; }
        public string? LY_DO_CHUYEN_PHAC_DO { get; set; }

        // Cơ sở KCB
        public string? MA_CSKCB { get; set; }

        public string? DU_PHONG { get; set; }
    }
}
