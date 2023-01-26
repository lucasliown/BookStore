using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;


namespace BookStore.Model
{
    public class Book
    {
        [StringLength(50)]
        [Key, DatabaseGenerated(DatabaseGeneratedOption.None)]
        public string BookId { get; set; }

        [Required]
        [StringLength(100)]
        public string Title { get; set; }


        [Required]

        public int Quantity { get; set; }


    }
}
