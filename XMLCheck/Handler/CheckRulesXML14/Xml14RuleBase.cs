using XMLCheck.Models;
using XMLCheck.Services;

namespace XMLCheck.Handler.CheckRulesXML14
{
    public abstract class Xml14RuleBase:IXml14Rule
    {
        public abstract string Key { get; }

        public abstract ErrorDetails? Check(Xml14Model model,HoSoContext context);

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
