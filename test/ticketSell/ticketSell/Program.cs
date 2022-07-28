using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ticketSell
{
    internal class Program
    {
        static void Main(string[] args)
        {
            int? ticket = 20;
            int TotalTicketSell;

            //in one line 
            TotalTicketSell = ticket ?? 0;
          
            
            /*
            if (ticket == null)
            {
                TotalTicketSell = 0;
            }
            else
            {
                TotalTicketSell= ticket.Value; //or
               // TotalTicketSell = (int)ticket;
            }
            */
             
            Console.WriteLine("Total ticket selled= "+ TotalTicketSell);

        }
    }
}
