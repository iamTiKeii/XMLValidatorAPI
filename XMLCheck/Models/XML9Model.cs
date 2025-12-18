namespace XMLCheck.Models
{
    public class Xml9Model
    {// Thông tin định danh hồ sơ
        public string? MA_LK { get; set; }

        // Người nuôi dưỡng (NND)
        public string? MA_BHXH_NND { get; set; }
        public string? MA_THE_NND { get; set; }
        public string? HO_TEN_NND { get; set; }
        public DateTime? NGAYSINH_NND { get; set; }
        public string? MA_DANTOC_NND { get; set; }
        public string? SO_CCCD_NND { get; set; }
        public DateTime? NGAYCAP_CCCD_NND { get; set; }
        public string? NOICAP_CCCD_NND { get; set; }
        public string? NOI_CU_TRU_NND { get; set; }

        // Địa chỉ – quốc tịch
        public string? MA_QUOCTICH { get; set; }
        public string? MATINH_CU_TRU { get; set; }
        public string? MAHUYEN_CU_TRU { get; set; }
        public string? MAXA_CU_TRU { get; set; }

        // Cha/mẹ & con
        public string? HO_TEN_CHA { get; set; }
        public string? MA_THE_TAM { get; set; }
        public string? HO_TEN_CON { get; set; }
        public int? GIOI_TINH_CON { get; set; }

        public int? SO_CON { get; set; }
        public int? LAN_SINH { get; set; }
        public int? SO_CON_SONG { get; set; }
        public decimal? CAN_NANG_CON { get; set; }

        public DateTime? NGAY_SINH_CON { get; set; }
        public string? NOI_SINH_CON { get; set; }
        public string? TINH_TRANG_CON { get; set; }

        // Sinh nở
        public string? SINHCON_PHAUTHUAT { get; set; }
        public string? SINHCON_DUOI32TUAN { get; set; }

        // Ghi chú – nghiệp vụ
        public string? GHI_CHU { get; set; }
        public string? NGUOI_DO_DE { get; set; }
        public string? NGUOI_GHI_PHIEU { get; set; }
        public DateTime? NGAY_CT { get; set; }

        // Sổ – đơn vị
        public string? SO { get; set; }
        public string? QUYEN_SO { get; set; }
        public string? MA_TTDV { get; set; }

        public string? DU_PHONG { get; set; }
    }
}
