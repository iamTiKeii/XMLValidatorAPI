using XMLCheck.Models;
using XMLCheck.Services;

namespace XMLCheck.Handler.CheckRulesXML07
{
    public static class Xml7RuleRunner
    {
        private static readonly List<IXml7Rule> _rules = new()
        {

        };
        public static List<ErrorDetails> Run(Xml7Model? model,HoSoContext context)
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
