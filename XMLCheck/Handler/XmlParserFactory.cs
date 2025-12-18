namespace XMLCheck.Handler
{
    public static class XmlParserFactory
    {
        private static readonly List<IXmlParser> _parsers = new()
    {
        new Xml1Parser(),
        new Xml2Parser(),
        new Xml3Parser(),
        new Xml4Parser(),
        new Xml5Parser(),
        new Xml6Parser(),
        new Xml7Parser(),
        new Xml8Parser(),
        new Xml9Parser(),
        new Xml10Parser(),
        new Xml11Parser(),
        new Xml13Parser(),
        new Xml14Parser(),
        new Xml15Parser(),
    };

        public static IXmlParser? GetParser(string loaiHoSo)
        {
            var key = loaiHoSo.Trim().ToUpper();
            return _parsers.FirstOrDefault(p => p.LoaiHoSo == key);
        }

    }


}
