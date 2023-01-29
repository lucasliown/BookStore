using BookStore.Controllers.CustomerCustomer;
using BookStore.Model;
using MediatR;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Runtime.InteropServices;

namespace BookStore.Controllers.Reservation
{
    [Route("api/[controller]")]
    [ApiController]
    public class ReservationController : ControllerBase
    {
        private readonly IMediator _mediator;

        private readonly ILogger<ReservationController> _logger;

        public ReservationController(IMediator mediator, ILogger<ReservationController> logger)
        {
            _mediator = mediator;
            _logger = logger;
        }


        //get customer reservation detail
        [HttpGet("{CustomerId}")]
        public async Task<IEnumerable<BookReservation>?> GetCustomerReservation(int CustomerId)
        {

            IEnumerable<BookReservation> _BookReservation = await _mediator.Send(new GetReservation.Query { _CustomerId = CustomerId });
            return _BookReservation;
        }

        [HttpPost]

        public async Task<ActionResult> CreateReservation([FromBody] CreateNewReservation.Command command)
        {
            var book = await _mediator.Send(command);
            //CreatedAtAction can create a URL it has actionName routeValues value
            //fail to reserve a book beacuse book is out of stock
            if (book == null)
            {
                return CreatedAtAction(nameof(CreateReservation), new { id = -1 }, null);
            }
            return CreatedAtAction(nameof(CreateReservation), new { id = book.BookId }, book);
        }

    }
}
