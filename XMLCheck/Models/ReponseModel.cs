namespace XMLCheck.Models
{
    public class ReponseModel
    {
        public int code { get; set; }
        public string message { get; set; }=string.Empty;
        public List<XMLError>? values { get; set; }
    }
}
