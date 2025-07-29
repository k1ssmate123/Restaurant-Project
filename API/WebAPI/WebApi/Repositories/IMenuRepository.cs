using WebApi.Models;

namespace WebApi.Repositories
{
    public interface IMenuRepository
    {
        Task AddMenuItem(MenuItem menuItem);
        Task<List<MenuItem>> GetMenuItems();
        Task<List<MenuItemCategory>> GetMenuCategories();
    }
}