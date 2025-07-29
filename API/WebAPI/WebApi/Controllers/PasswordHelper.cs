using Microsoft.AspNetCore.Identity;
using WebApi.Models;

namespace WebApi.Controllers
{
    public class PasswordHelper : IPasswordHelper
    {
        readonly IPasswordHasher<User> _passwordHasher;

        public PasswordHelper(IPasswordHasher<User> passwordHasher)
        {
            _passwordHasher = passwordHasher;
        }

        public string GeneratePassword(User user, string password)
        {
            return _passwordHasher.HashPassword(user, password);
        }
        public bool VerifyPassword(User user, string hashedPassword, string password)
        {
            var result = _passwordHasher.VerifyHashedPassword(user, hashedPassword, password);
            return result == PasswordVerificationResult.Success;

        }
    }
}
