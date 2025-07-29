using System.ComponentModel.DataAnnotations;

namespace WebApi.Models
{
    public class MenuItem
    {
        [Key]
        public int Id { get; set; }
        public string Name { get; set; }
        public int CategoryId { get; set; }
        public int Price { get; set; }
    }
}
