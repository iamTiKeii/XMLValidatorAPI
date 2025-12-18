namespace XMLCheck.Models
{
    public class XMLError
    {
        public string type { get; set; } = string.Empty;// 1,2,3,...
        public List<ErrorDetails>? details { get; set; }
    }
}
