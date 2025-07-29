using Microsoft.EntityFrameworkCore;
using WebApi.Models;

namespace WebApi.Repositories
{
    public class UserRepository : IUserRepository
    {
        DatabaseContext db;

        public UserRepository(DatabaseContext db)
        {
            this.db = db;
        }

        public async Task CreateUser(User user)
        {
            await db.Users.AddAsync(user);
            await db.SaveChangesAsync();
        }
        public async Task<User?> GetUser(string email)
        {
            return await db.Users.FirstOrDefaultAsync(x => x.Email == email);

        }

    }
}
