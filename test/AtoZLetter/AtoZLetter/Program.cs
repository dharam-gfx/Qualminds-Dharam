using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AtoZLetter
{
    internal class Program
    {
        static void Main(string[] args)
        {
            char ch = 'A';
            for (char i = ch; i <= 'Z'|| i<='z'; i++)
            {
                Console.WriteLine(i);
            }

           // Console.ReadLine();
        }
    }
}
