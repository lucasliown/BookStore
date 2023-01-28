using MediatR;
using Microsoft.AspNetCore.Mvc;
using BookStore.Model;

namespace BookStore.Controllers.CustomerCustomer
{
    [Route("api/[controller]")]
    [ApiController]
    public class CustomerController : ControllerBase
    {

        private readonly IMediator _mediator;
        public CustomerController(IMediator mediator) {
            _mediator=mediator;
        }

        [HttpGet("{Name}")]
        public async Task<Customer?> Login (string Name)
        {
            Customer LoginCustomer= null;
            try
            {
                LoginCustomer =  await _mediator.Send(new Login.Query { _Name = Name });
                return LoginCustomer;
            }
            catch(Exception ex)
            {
               Console.WriteLine("Account isn't exist . "+ "The Reason is : " + ex);
            }
            return LoginCustomer;
        }

    }
}
