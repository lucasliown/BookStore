using MediatR;
using BookStore.Model;
using BookStore.Data;
using Microsoft.EntityFrameworkCore;

namespace BookStore.Controllers.BookController
{
    public class GetBooks
    {
        public class Query : IRequest<IEnumerable<Book>> { }

        public class QueryHandler : IRequestHandler<Query, IEnumerable<Book>>
        {
            private readonly BookStoreContext _context;
            public QueryHandler(BookStoreContext context)
            {
                _context = context;
            }


            public async Task<IEnumerable<Book>> Handle(Query request, CancellationToken cancellationToken)
            {
                return await _context.Books.ToListAsync(cancellationToken);
            }
        }



    }
}
