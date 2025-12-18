using XMLCheck.Models;
using XMLCheck.Services;

namespace XMLCheck.Handler.CheckRulesXML09
{
    public abstract class Xml9RuleBase:IXml9Rule
    {
        public abstract string Key { get; }

        public abstract ErrorDetails? Check(Xml9Model model,HoSoContext context);

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
