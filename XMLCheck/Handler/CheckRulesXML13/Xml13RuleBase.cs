using XMLCheck.Models;
using XMLCheck.Services;

namespace XMLCheck.Handler.CheckRulesXML13
{
    public abstract class Xml13RuleBase:IXml13Rule
    {
        public abstract string Key { get; }

        public abstract ErrorDetails? Check(Xml13Model model,HoSoContext context);

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
