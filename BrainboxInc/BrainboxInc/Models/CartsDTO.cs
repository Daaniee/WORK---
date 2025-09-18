using System.ComponentModel.DataAnnotations.Schema;

namespace BrainboxInc.Models
{
    public class CartsDTO
    {
        public int CartId { get; set; }
        public int ItemsId { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public int Price { get; set; }
        public string ImageUrl { get; set; }
        public int Quantity { get; set; }
        public DateTime DateAdded { get; set; }
    }

    public class AddToCartDTO
    {
        public int ItemsId { get; set; }
        public int Quantity { get; set; }
    }
}