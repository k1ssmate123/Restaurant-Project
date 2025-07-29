using Microsoft.EntityFrameworkCore;
using WebApi.Models;

namespace WebApi.Repositories
{
    public class MenuRepository : IMenuRepository
    {
        DatabaseContext db;

        public MenuRepository(DatabaseContext db)
        {
            this.db = db;
        }

        public async Task AddMenuItem(MenuItem menuItem)
        {
            await db.MenuItems.AddAsync(menuItem);
            await db.SaveChangesAsync();
        }
        public async Task<List<MenuItem>> GetMenuItems()
        {
            return await db.MenuItems.ToListAsync();
        }
        public async Task<List<MenuItemCategory>> GetMenuCategories()
        {
            return await db.MenuItemCategories.ToListAsync();
        }

    }
}
