using BookStore.Data;
using BookStore.Model;
using MediatR;
using Microsoft.EntityFrameworkCore;

namespace BookStore.Controllers.Reservation
{
    public class GetReservation
    {

        public class Query : IRequest<IEnumerable<BookReservation>>
        {

            public int _CustomerId { get; set; }

        }

        public class QueryHandler : IRequestHandler<Query, IEnumerable<BookReservation>>
        {
            private readonly BookStoreContext _context;
            public QueryHandler(BookStoreContext context)
            {
                _context = context;
            }

            //handle the database for getting all books
            public async Task<IEnumerable<BookReservation>?> Handle(Query request, CancellationToken cancellationToken)
            {
                List<BookReservation> BookReservationList = 
                    await _context.BooksReservation.Where(x => x.CustomerId == request._CustomerId).ToListAsync(cancellationToken);
              return BookReservationList;

            }
        }





    }
}
