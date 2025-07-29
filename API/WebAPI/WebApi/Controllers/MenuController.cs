using Microsoft.AspNetCore.Mvc;
using WebApi.Models;
using WebApi.Repositories;

namespace WebApi.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class MenuController : ControllerBase
    {
        IMenuRepository _repo;

        public MenuController(IMenuRepository repo)
        {
            _repo = repo;
        }

        [HttpGet("Items")]
        public async Task<ActionResult<IList<MenuItem>>> GetMenu()
        {
           return Ok(await _repo.GetMenuItems());
        }
        [HttpGet("Categories")]
        public async Task<ActionResult<IList<MenuItemCategory>>> GetMenuItemCategories()
        {
            return Ok(await _repo.GetMenuCategories());
        }
    }
}
