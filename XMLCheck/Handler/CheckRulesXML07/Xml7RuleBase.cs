using XMLCheck.Models;
using XMLCheck.Services;

namespace XMLCheck.Handler.CheckRulesXML07
{
    public abstract class Xml7RuleBase:IXml7Rule
    {
        public abstract string Key { get; }

        public abstract ErrorDetails? Check(Xml7Model model,HoSoContext context);

        protected ErrorDetails Error(string message)
        {
            return new ErrorDetails
            {
                key = Key,
                message = message
            };
        }
    }
}
