using MediatR;
using BookStore.Model;
using BookStore.Data;
using System.Runtime.InteropServices;
using Microsoft.EntityFrameworkCore;

namespace BookStore.Controllers.CustomerCustomer
{
    public class Login
    {
        public class Query : IRequest<Customer>
        {

            public string _Name { get; set; }

        }

        public class QueryHandler : IRequestHandler<Query, Customer>
        {
            private readonly BookStoreContext _context;
            public QueryHandler(BookStoreContext context)
            {
                _context = context;
            }


            //handle the database for verify customer detail
            public async Task<Customer?> Handle(Query request, CancellationToken cancellationToken)
            {
                var verifyData = await _context.Customers.Where(x => x.Name == request._Name).FirstAsync();
                return verifyData;
            }
        }



    }
}
