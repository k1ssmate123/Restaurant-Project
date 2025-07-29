using WebApi.Models;

namespace WebApi.Repositories
{
    public interface IUserRepository
    {
        Task CreateUser(User user);
        Task<User?> GetUser(string email);
    }
}