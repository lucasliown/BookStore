using Microsoft.EntityFrameworkCore;
using MySql.EntityFrameworkCore;
using BookStore.Model;


namespace BookStore.Data
{
    public class BookStoreContext:DbContext
    {
        public DbSet<Book> Books { get; set; }

        public DbSet<Customer> Customers { get; set; }

        public DbSet<BookReservation> BooksReservation { get; set; }

    }
}
