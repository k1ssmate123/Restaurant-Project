using Microsoft.EntityFrameworkCore;
using WebApi.Models;


namespace WebApi.Repositories
{
    public class DatabaseContext : DbContext
    {
        public DbSet<User> Users { get; set; }
        public DbSet<MenuItem> MenuItems { get; set; }
        public DbSet<MenuItemCategory> MenuItemCategories { get; set; }
        public DatabaseContext()
        {
          
        }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            string connString = @"Data Source=(LocalDB)\MSSQLLocalDB;Initial Catalog=figuradb;Integrated Security=True;MultipleActiveResultSets=true";
            optionsBuilder.UseSqlServer(connString);
            base.OnConfiguring(optionsBuilder);
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            string[] categories = File.ReadAllText("categories.csv").Split(';');

            // Kategóriák ID-val
            for (int i = 0; i < categories.Length; i++)
            {
                modelBuilder.Entity<MenuItemCategory>().HasData(
                    new MenuItemCategory() { Id = i + 1, Name = categories[i] }
                );
            }

            string[] products = File.ReadAllText("products.csv").Split('\n');

            for (int i = 0; i < products.Length; i++)
            {
                string[] product = products[i].Split(';');
                string productName = product[0];
                string productCategoryName = product[1];
                int productPrice = int.Parse(product[2]);

                // Megkeressük a kategória ID-t
                int categoryId = Array.FindIndex(categories, c => c == productCategoryName) + 1;

                modelBuilder.Entity<MenuItem>().HasData(
                    new MenuItem()
                    {
                        Id = i + 1,  // fix ID szükséges a seed-hez
                        Name = productName,
                        CategoryId = categoryId,
                        Price = productPrice
                    }
                );
            }

            base.OnModelCreating(modelBuilder);
        }
    }
}
