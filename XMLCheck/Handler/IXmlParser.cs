namespace XMLCheck.Handler
{
    public interface IXmlParser
    {
        string LoaiHoSo { get; }
        object Parse(string xmlContent);
    }

}
