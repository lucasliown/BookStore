using BookStore.Model;

namespace BookStore.Data
{
    public static class AddInitationData
    {
        public static void Initialize(IServiceProvider serviceProvider)
        {
            var context = serviceProvider.GetRequiredService<BookStoreContext>();


            if (context.Books.Any())
                return;

            context.Books.AddRange(
                new Book
                {
                    BookId = "9b0896fa-3880-4c2e-bfd6-925c87f22878",
                    Title = "CQRS for Dummies",
                    Quantity = 1,
                },
                new Book
                {
                    BookId = "0550818d-36ad-4a8d-9c3a-a715bf15de76",
                    Title = "Visual Studio Tips",
                    Quantity = 1,
                },
                  new Book
                  {
                      BookId = "8e0f11f1-be5c-4dbc-8012-c19ce8cbe8e1",
                      Title = "NHibernate Cookbook",
                      Quantity = 1,
                  }
            );

            context.SaveChanges();

            context.Customers.AddRange(
                new Customer
                {
                    Name = "Lucas Li",
                },
                new Customer
                {
                    Name = "David",
                }
            );

            context.SaveChanges();
        }
    }
}

