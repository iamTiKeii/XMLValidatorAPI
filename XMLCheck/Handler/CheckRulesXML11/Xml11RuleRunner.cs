using XMLCheck.Models;
using XMLCheck.Services;

namespace XMLCheck.Handler.CheckRulesXML11
{
    public static class Xml11RuleRunner
    {
        private static readonly List<IXml11Rule> _rules = new()
        {

        };
        public static List<ErrorDetails> Run(Xml11Model? model,HoSoContext context)
        {
            var errors = new List<ErrorDetails>();

            foreach (var rule in _rules)
            {
                var err = rule.Check(model,context);
                if (err != null)
                    errors.Add(err);
            }

            return errors;
        }
    }
}
