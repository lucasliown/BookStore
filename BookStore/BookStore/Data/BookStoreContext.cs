using Microsoft.EntityFrameworkCore;
using MySql.EntityFrameworkCore;
using BookStore.Model;



namespace BookStore.Data
{
    public class BookStoreContext : DbContext
    {
        public BookStoreContext(DbContextOptions<BookStoreContext> options) : base(options)
        { }
        public DbSet<Book> Books { get; set; }

        public DbSet<Customer> Customers { get; set; }

        public DbSet<BookReservation> BooksReservation { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {

            optionsBuilder.UseMySQL("server=localhost;database=bookstoredata;user=Lucas;password=1H2k3s4j");
        }
    }
}
