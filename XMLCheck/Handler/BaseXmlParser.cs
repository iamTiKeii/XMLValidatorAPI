using System.Globalization;
using System.Xml.Linq;

namespace XMLCheck.Handler
{
    public abstract class BaseXmlParser
    {
        protected XDocument? Document;
        protected XElement? Root;

        protected bool Load(string xmlContent)
        {
            if (string.IsNullOrWhiteSpace(xmlContent))
                return false;

            try
            {
                // Xử lý BOM + parse
                xmlContent = xmlContent.Trim('\uFEFF', '\u200B', '\u0000');

                Document = XDocument.Parse(xmlContent);
                Root = Document.Root;

                return Root != null;
            }
            catch
            {
                return false;
            }
        }

        // =========================
        // HELPER CORE (CHUẨN HOÁ)
        // =========================

        protected string? S(string key)
        {
            return Root?
                .Descendants()
                .FirstOrDefault(e => e.Name.LocalName == key)
                ?.Value
                ?.Trim();
        }

        protected int? I(string key)
        {
            return int.TryParse(S(key), out var v) ? v : null;
        }

        protected decimal? D(string key)
        {
            return decimal.TryParse(
                S(key),
                NumberStyles.Any,
                CultureInfo.InvariantCulture,
                out var v
            ) ? v : null;
        }

        protected DateTime? DT(string key)
        {
            var raw = S(key);
            if (string.IsNullOrWhiteSpace(raw)) return null;

            string[] formats =
            {
                "yyyyMMdd",
                "yyyyMMddHHmm",
                "yyyyMMddHHmmss"
            };

            return DateTime.TryParseExact(
                raw,
                formats,
                CultureInfo.InvariantCulture,
                DateTimeStyles.None,
                out var d
            ) ? d : null;
        }

        // =========================
        // HELPER ROOT CHECK
        // =========================

        protected bool IsRoot(string expectedLocalName)
        {
            if (Root == null) return false;

            var name = Root.Name.LocalName
                .Trim('\uFEFF')
                .Trim();

            return name == expectedLocalName;
        }
    }
}
