using MediatR;
using Microsoft.AspNetCore.Mvc;
using BookStore.Model;
using Microsoft.Extensions.Logging;

namespace BookStore.Controllers.CustomerCustomer
{
    [Route("api/[controller]")]
    [ApiController]
    public class CustomerController : ControllerBase
    {

        private readonly ILogger<CustomerController> _logger;

        private readonly IMediator _mediator;
        public CustomerController(IMediator mediator, ILogger<CustomerController> logger) {
            _mediator=mediator;
            _logger=logger;
        }

        //Login function
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
                _logger.LogError(ex, "Account isn't exist . ");
            }
            return LoginCustomer;
        }

    }
}
