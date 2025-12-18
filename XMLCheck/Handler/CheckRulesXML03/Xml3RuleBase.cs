using XMLCheck.Models;
using XMLCheck.Services;

namespace XMLCheck.Handler.CheckRulesXML03
{
    public abstract class Xml3RuleBase:IXml3Rule
    {
        public abstract string Key { get; }

        public abstract ErrorDetails? Check(Xml3Model model,HoSoContext context);

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
