using System.Text.Json;

namespace XMLCheck.Handler
{
    public static class DictionaryCache
    {
        public static readonly Dictionary<string, string> MaQuocTich;
        public static readonly Dictionary<string, string> MaDanToc;
        public static readonly Dictionary<string, string> DoiTuongBHYT;
        public static readonly Dictionary<string, string> DoiTuongKCB;
        public static readonly Dictionary<string, string> KetQuaDTri;
        public static readonly Dictionary<string, string> MaLoaiRV;
        static DictionaryCache()
        {
            MaQuocTich = Load("dm_ma_quoctich.json");
            MaDanToc = Load("dm_ma_dantoc.json");
            DoiTuongBHYT = Load("dm_ma_doituong_bhyt.json");
            DoiTuongKCB = Load("dm_ma_doituong_kcb.json");
            KetQuaDTri = Load("dm_ket_qua_dtri.json");
            MaLoaiRV = Load("dm_ma_loai_rv.json");
        }

        private static Dictionary<string, string> Load(string fileName)
        {
            var path = Path.Combine(
                AppContext.BaseDirectory,
                "Resources",
                "Dictionaries",
                fileName
            );

            if (!File.Exists(path))
                return new Dictionary<string, string>();

            return JsonSerializer.Deserialize<Dictionary<string, string>>(
                File.ReadAllText(path)
            ) ?? new Dictionary<string, string>();
        }
    }
}
