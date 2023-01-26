using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using MediatR;
using BookStore.Model;

namespace BookStore.Controllers.BookController
{
    [Route("api/[controller]")]
    [ApiController]
    public class BookController : ControllerBase
    {
        private readonly IMediator _mediator;

        public BookController(IMediator mediator)
        {
            _mediator = mediator;
        }

        [HttpGet]
        public async Task<IEnumerable<Book>> GetBook()
        {

            return await _mediator.Send(new GetBooks.Query());

        }
     

    }
}
