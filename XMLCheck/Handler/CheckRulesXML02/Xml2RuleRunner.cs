using XMLCheck.Handler.CheckRulesXML2;
using XMLCheck.Models;
using XMLCheck.Services;

namespace XMLCheck.Handler.CheckRulesXML02
{
    public static class Xml2RuleRunner
    {
        private static readonly List<IXml2Rule> _rules = new()
        {
            // rule khác
        };

        public static List<ErrorDetails> Run(
            List<Xml2Model> models,
            HoSoContext context)
        {
            var errors = new List<ErrorDetails>();

            foreach (var m in models)
            {
                foreach (var rule in _rules)
                {
                    var err = rule.Check(m, context);
                    if (err != null)
                        errors.Add(err);
                }
            }

            return errors;
        }

    }

}
