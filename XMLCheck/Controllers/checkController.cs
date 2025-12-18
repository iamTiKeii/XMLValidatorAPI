using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using XMLCheck.Models;
using XMLCheck.Services;

namespace XMLCheck.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class checkController : ControllerBase
    {
        private readonly ICheckXMLServices _checkXMLServices;
        public checkController(ICheckXMLServices checkXMLServices)
        {
            _checkXMLServices = checkXMLServices;
        }
        [HttpPost("check-xml")]
        public IActionResult CheckXml([FromBody] RequestModel model)
        {
            var result = _checkXMLServices.CheckXml(model.data.base64Xml);
            return StatusCode(result.code, result);
        }

    }
}
