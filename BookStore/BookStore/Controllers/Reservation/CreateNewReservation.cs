using BookStore.Data;
using BookStore.Model;
using MediatR;
using Microsoft.EntityFrameworkCore;
using System.Net;
using System.Runtime.InteropServices;

namespace BookStore.Controllers.Reservation
{
    public class CreateNewReservation
    {
        public class Command : IRequest<BookReservation>
        {
            public string BookId { get; set; }

            public int CustomerId { get; set; }
        }

        public class CommandHandler : IRequestHandler<Command, BookReservation>
        {

            private readonly BookStoreContext _context;

            public CommandHandler(BookStoreContext context) {
                _context=context;
            }


            //add new reservation in the database
            public async Task<BookReservation?> Handle(Command request, CancellationToken cancellationToken)
            {
                BookReservation Reservation = new BookReservation
                {
                     BookId=request.BookId,
                     CustomerId=request.CustomerId,
                };
                //find the book that customer want to reserved
                var Book = await _context.Books.FindAsync(request.BookId, cancellationToken);
                //check out of stock or not
                if (Book.Quantity == 0)
                {
                    return null;
                }
                Book.Quantity--;
                await _context.BooksReservation.AddAsync(Reservation, cancellationToken);
                await _context.SaveChangesAsync(cancellationToken);
                return Reservation;
            }
        }



    }
}
