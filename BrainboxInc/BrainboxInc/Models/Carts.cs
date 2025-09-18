using System.ComponentModel.DataAnnotations.Schema;

namespace BrainboxInc.Models
{
    public class Cart
    {
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int CartId { get; set; }

        public int ItemsId { get; set; }

        public int Quantity { get; set; }

        public DateTime DateAdded { get; set; } = DateTime.Now;
        // Navigation property
        [ForeignKey("ItemsId")]
        public virtual Item Item { get; set; }
    }

}