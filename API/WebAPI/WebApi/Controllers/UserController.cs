using Microsoft.AspNetCore.Mvc;
using WebApi.Models;
using WebApi.Repositories;

namespace WebApi.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class UserController : ControllerBase
    {
        IUserRepository _repo;
        readonly IPasswordHelper _passwordHelper;
        TokenProvider _tokenProvider;

        public UserController(IUserRepository repo, IPasswordHelper passwordHelper, TokenProvider tokenProvider)
        {
            _repo = repo;
            _passwordHelper = passwordHelper;
            _tokenProvider = tokenProvider;
        }

        [HttpPost("Login")]
        public async Task<ActionResult> GetUser([FromBody] LoginDto dto)
        {
            User? user = await _repo.GetUser(dto.Email);
            if (user == null || !_passwordHelper.VerifyPassword(user, user.HashedPassword, dto.Password))
            {
                return BadRequest("Hibás felhasználónév vagy jelszó");
            }
            string token = _tokenProvider.Create(user);
            return Ok(new { token, user.Id, user.Name, user.Email }); //TODO Finish JWT

        }

        [HttpPost("Register")]
        public async Task<IActionResult> Register([FromBody] RegisterDto dto)
        {
            if (await _repo.GetUser(dto.Email) != null)
                return BadRequest("Ezzel az email címmel már létezik felhasználó.");

            var user = new User
            {
                Name = dto.Name,
                Email = dto.Email,
                HashedPassword = _passwordHelper.GeneratePassword(null!, dto.Password)
            };

            await _repo.CreateUser(user);
            return Ok(new { user.Id, user.Name, user.Email });
        }

    }
}
