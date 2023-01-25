using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;


namespace BookStore.Model
{
    public class Book
    {
        [Required]
        [StringLength(50)]
        [Key, DatabaseGenerated(DatabaseGeneratedOption.None)]
        public string BookId { get; set; }


        public string Title { get; set; }



        public int Quantity { get; set; }


    }
}
