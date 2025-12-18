using XMLCheck.Models;
using XMLCheck.Services;

namespace XMLCheck.Handler.CheckRulesXML13
{
    public static class Xml13RuleRunner
    {
        private static readonly List<IXml13Rule> _rules = new()
        {

        };
        public static List<ErrorDetails> Run(Xml13Model? model,HoSoContext context)
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
