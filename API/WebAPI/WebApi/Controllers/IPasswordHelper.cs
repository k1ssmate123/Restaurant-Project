using WebApi.Models;

namespace WebApi.Controllers
{
    public interface IPasswordHelper
    {
        string GeneratePassword(User user, string password);
        bool VerifyPassword(User user, string hashedPassword, string password);
    }
}