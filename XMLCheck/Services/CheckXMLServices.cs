using System.Text;
using System.Xml.Linq;
using System.Linq;
using System.Collections.Generic;
using XMLCheck.Handler;
using XMLCheck.Handler.CheckRulesXML02;
using XMLCheck.Handler.CheckRulesXML03;
using XMLCheck.Handler.CheckRulesXML04;
using XMLCheck.Handler.CheckRulesXML05;
using XMLCheck.Handler.CheckRulesXML06;
using XMLCheck.Handler.CheckRulesXML07;
using XMLCheck.Handler.CheckRulesXML08;
using XMLCheck.Handler.CheckRulesXML09;
using XMLCheck.Handler.CheckRulesXML1;
using XMLCheck.Handler.CheckRulesXML10;
using XMLCheck.Handler.CheckRulesXML11;
using XMLCheck.Handler.CheckRulesXML13;
using XMLCheck.Handler.CheckRulesXML14;
using XMLCheck.Handler.CheckRulesXML15;
using XMLCheck.Models;
namespace XMLCheck.Services
{
    public class CheckXMLServices : ICheckXMLServices
    {
        public ReponseModel CheckXml(string base64Xml)
        {
            try
            {
                if (string.IsNullOrWhiteSpace(base64Xml))
                {
                    return new ReponseModel
                    {
                        code = StatusCodes.Status400BadRequest,
                        message = "Base64 XML rỗng"
                    };
                }
                // 1. Decode XML tổng
                string xmlContent;
                try
                {
                    var bytes = Convert.FromBase64String(base64Xml);
                    xmlContent = Encoding.UTF8.GetString(bytes);
                }
                catch
                {
                    return new ReponseModel
                    {
                        code = StatusCodes.Status400BadRequest,
                        message = "Base64 XML không hợp lệ"
                    };
                }
                // 2. Parse XML tổng
                XDocument doc;
                try
                {
                    doc = XDocument.Parse(xmlContent);
                }
                catch
                {
                    return new ReponseModel
                    {
                        code = StatusCodes.Status400BadRequest,
                        message = "XML tổng không hợp lệ"
                    };
                }
                // 3. Parse từng hồ sơ
                var contextsByMaLk = new Dictionary<string, HoSoContext>(StringComparer.OrdinalIgnoreCase);
                var hoSoIndex = 0;

                foreach (var hoSo in doc.Descendants("HOSO"))
                {
                    var fallbackKey = $"__IDX_{hoSoIndex++}";

                    foreach (var file in hoSo.Descendants("FILEHOSO"))
                    {
                        var loaiHoSoRaw = file.Element("LOAIHOSO")?.Value;
                        var loaiHoSo = NormalizeLoaiHoSo(loaiHoSoRaw);
                        var noiDungBase64 = file.Element("NOIDUNGFILE")?.Value;

                        if (string.IsNullOrWhiteSpace(loaiHoSo) ||
                            string.IsNullOrWhiteSpace(noiDungBase64))
                            continue;

                        string xmlChild;
                        try
                        {
                            xmlChild = Encoding.UTF8.GetString(
                                Convert.FromBase64String(noiDungBase64)
                            );
                        }
                        catch
                        {
                            continue;
                        }

                        var parser = XmlParserFactory.GetParser(loaiHoSo);
                        if (parser == null) continue;

                        var parsed = parser.Parse(xmlChild);
                        var maLk = ExtractMaLk(loaiHoSo, parsed);
                        var ctxKey = !string.IsNullOrWhiteSpace(maLk) ? maLk! : fallbackKey;

                        if (!contextsByMaLk.TryGetValue(ctxKey, out var context))
                        {
                            context = new HoSoContext();
                            contextsByMaLk[ctxKey] = context;
                        }

                        switch (loaiHoSo)
                        {
                            case "XML1":
                                context.Xml1 = parsed as Xml1Model;
                                break;
                            case "XML2":
                                context.Xml2 = MergeList(context.Xml2, parsed as List<Xml2Model>);
                                break;
                            case "XML3":
                                context.Xml3 = MergeList(context.Xml3, parsed as List<Xml3Model>);
                                break;
                            case "XML4":
                                context.Xml4 = MergeList(context.Xml4, parsed as List<Xml4Model>);
                                break;
                            case "XML5":
                                context.Xml5 = MergeList(context.Xml5, parsed as List<Xml5Model>);
                                break;
                            case "XML6":
                                context.Xml6 = MergeList(context.Xml6, parsed as List<Xml6Model>);
                                break;
                            case "XML7":
                                context.Xml7 = parsed as Xml7Model;
                                break;
                            case "XML8":
                                context.Xml8 = parsed as Xml8Model;
                                break;
                            case "XML9":
                                context.Xml9 = MergeList(context.Xml9, parsed as List<Xml9Model>);
                                break;
                            case "XML10":
                                context.Xml10 = parsed as Xml10Model;
                                break;
                            case "XML11":
                                context.Xml11 = parsed as Xml11Model;
                                break;
                            case "XML13":
                                context.Xml13 = parsed as Xml13Model;
                                break;
                            case "XML14":
                                context.Xml14 = parsed as Xml14Model;
                                break;
                            case "XML15":
                                context.Xml15 = MergeList(context.Xml15, parsed as List<Xml15Model>);
                                break;
                        }
                    }
                }

                var hoSoContexts = contextsByMaLk.Values.ToList();
                // 4. RUN RULE ENGINE
                var xmlErrors = new List<XMLError>();
                foreach (var ctx in hoSoContexts)
                {
                    // XML1
                    if (ctx.Xml1 != null)
                    {
                        var errs = Xml1RuleRunner.Run(ctx.Xml1,ctx);
                        if (errs.Any())
                            xmlErrors.Add(new XMLError { type = "XML1", details = errs });
                    }
                    // XML2
                    if (ctx.Xml2?.Any() == true)
                    {
                        var errs = Xml2RuleRunner.Run(ctx.Xml2,ctx);
                        if (errs.Any())
                            xmlErrors.Add(new XMLError { type = "XML2", details = errs });
                    }
                    // XML3
                    if (ctx.Xml3?.Any() == true)
                    {
                        var errs = Xml3RuleRunner.Run(ctx.Xml3, ctx);
                        if (errs.Any())
                            xmlErrors.Add(new XMLError { type = "XML3", details = errs });
                    }
                    // XML4
                    if (ctx.Xml4?.Any() == true)
                    {
                        var errs = Xml4RuleRunner.Run(ctx.Xml4, ctx);
                        if (errs.Any())
                            xmlErrors.Add(new XMLError { type = "XML4", details = errs });
                    }
                    // XML5
                    if (ctx.Xml5?.Any() == true)
                    {
                        var errs = Xml5RuleRunner.Run(ctx.Xml5, ctx);
                        if (errs.Any())
                            xmlErrors.Add(new XMLError { type = "XML5", details = errs });
                    }
                    // XML6
                    if (ctx.Xml6?.Any() == true)
                    {
                        var errs = Xml6RuleRunner.Run(ctx.Xml6, ctx);
                        if (errs.Any())
                            xmlErrors.Add(new XMLError { type = "XML6", details = errs });
                    }
                    // XML7
                    if (ctx.Xml7 != null)
                    {
                        var errs = Xml7RuleRunner.Run(ctx.Xml7, ctx);
                        if (errs.Any())
                            xmlErrors.Add(new XMLError { type = "XML7", details = errs });
                    }
                    // XML8
                    if (ctx.Xml8 != null)
                    {
                        var errs = Xml8RuleRunner.Run(ctx.Xml8, ctx);
                        if (errs.Any())
                            xmlErrors.Add(new XMLError { type = "XML8", details = errs });
                    }
                    // XML9
                    if (ctx.Xml9?.Any() == true)
                    {
                        var errs = Xml9RuleRunner.Run(ctx.Xml9, ctx);
                        if (errs.Any())
                            xmlErrors.Add(new XMLError { type = "XML9", details = errs });
                    }
                    // XML10
                    if (ctx.Xml10 != null)
                    {
                        var errs = Xml10RuleRunner.Run(ctx.Xml10, ctx);
                        if (errs.Any())
                            xmlErrors.Add(new XMLError { type = "XML10", details = errs });
                    }
                    // XML11
                    if (ctx.Xml11 != null)
                    {
                        var errs = Xml11RuleRunner.Run(ctx.Xml11, ctx);
                        if (errs.Any())
                            xmlErrors.Add(new XMLError { type = "XML11", details = errs });
                    }
                    // XML13
                    if (ctx.Xml13 != null)
                    {
                        var errs = Xml13RuleRunner.Run(ctx.Xml13, ctx);
                        if (errs.Any())
                            xmlErrors.Add(new XMLError { type = "XML13", details = errs });
                    }
                    // XML14
                    if (ctx.Xml14 != null)
                    {
                        var errs = Xml14RuleRunner.Run(ctx.Xml14, ctx);
                        if (errs.Any())
                            xmlErrors.Add(new XMLError { type = "XML14", details = errs });
                    }
                    // XML15
                    if (ctx.Xml15?.Any() == true)
                    {
                        var errs = Xml15RuleRunner.Run(ctx.Xml15, ctx);
                        if (errs.Any())
                            xmlErrors.Add(new XMLError { type = "XML15", details = errs });
                    }
                }
                // 5. TRẢ KẾT QUẢ
                if (xmlErrors.Any())
                {
                    return new ReponseModel
                    {
                        code = StatusCodes.Status422UnprocessableEntity,
                        message = "Dữ liệu XML không hợp lệ",
                        values = xmlErrors
                    };
                }
                return new ReponseModel
                {
                    code = StatusCodes.Status200OK,
                    message = $"XML hợp lệ ({hoSoContexts.Count} hồ sơ)",
                    values = null
                };
            }
            catch (Exception ex)
            {
                return new ReponseModel
                {
                    code = StatusCodes.Status500InternalServerError,
                    message = "Lỗi hệ thống: " + ex.Message
                };
            }
        }
        #region Helpers
        private List<T>? MergeList<T>(List<T>? target, List<T>? source)
        {
            if (source == null || source.Count == 0) return target;
            target ??= new List<T>();
            target.AddRange(source);
            return target;
        }
        private string? ExtractMaLk(string loaiHoSo, object parsed)
        {
            return loaiHoSo switch
            {
                "XML1" => (parsed as Xml1Model)?.MA_LK,
                "XML2" => (parsed as List<Xml2Model>)?.FirstOrDefault(x => !string.IsNullOrWhiteSpace(x.MA_LK))?.MA_LK,
                "XML3" => (parsed as List<Xml3Model>)?.FirstOrDefault(x => !string.IsNullOrWhiteSpace(x.MA_LK))?.MA_LK,
                "XML4" => (parsed as List<Xml4Model>)?.FirstOrDefault(x => !string.IsNullOrWhiteSpace(x.MA_LK))?.MA_LK,
                "XML5" => (parsed as List<Xml5Model>)?.FirstOrDefault(x => !string.IsNullOrWhiteSpace(x.MA_LK))?.MA_LK,
                "XML6" => (parsed as List<Xml6Model>)?.FirstOrDefault(x => !string.IsNullOrWhiteSpace(x.MA_LK))?.MA_LK,
                "XML7" => (parsed as Xml7Model)?.MA_LK,
                "XML8" => (parsed as Xml8Model)?.MA_LK,
                "XML9" => (parsed as List<Xml9Model>)?.FirstOrDefault(x => !string.IsNullOrWhiteSpace(x.MA_LK))?.MA_LK,
                "XML10" => (parsed as Xml10Model)?.MA_LK,
                "XML11" => (parsed as Xml11Model)?.MA_LK,
                "XML13" => (parsed as Xml13Model)?.MA_LK,
                "XML14" => (parsed as Xml14Model)?.MA_LK,
                "XML15" => (parsed as List<Xml15Model>)?.FirstOrDefault(x => !string.IsNullOrWhiteSpace(x.MA_LK))?.MA_LK,
                _ => null,
            };
        }
        private string NormalizeLoaiHoSo(string? input)
        {
            if (string.IsNullOrWhiteSpace(input))
                return string.Empty;
            input = input.Trim();
            // LOAIHOSO may come as a file name (e.g. "xml2.xml"), so strip the extension
            var dotIdx = input.IndexOf('.');
            if (dotIdx >= 0)
                input = input[..dotIdx];
            input = input.ToUpper();
            if (!input.StartsWith("XML"))
                input = "XML" + input.Replace("XML", "");
            return input;
        }
        
        
        #endregion
    }
}
