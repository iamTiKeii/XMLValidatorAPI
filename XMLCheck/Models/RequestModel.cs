namespace XMLCheck.Models
{
    public class RequestModel
    {
        public RequestModelData data { get; set; }=new RequestModelData();
    }
    public class RequestModelData
    {
        public string base64Xml { get; set; }=string.Empty;
    }
}
