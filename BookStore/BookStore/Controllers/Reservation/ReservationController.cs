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

        public ReservationController(IMediator mediator)
        {
            _mediator = mediator;
        }

        [HttpPost]

        public async Task<ActionResult> CreateReservation([FromBody] CreateNewReservation.Command command)
        {
            var book = await _mediator.Send(command);
            //CreatedAtAction can create a URL it has actionName routeValues value
            if (book == null)
            {
                return CreatedAtAction(nameof(CreateReservation), new { id = -1 }, null);
            }
            return CreatedAtAction(nameof(CreateReservation), new { id = book.BookId }, book);
        }

    }
}
