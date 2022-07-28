using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace StringIntBool
{
    internal class Program
    {
        static void Main(string[] args)
        {
            string num = "44";
            int result = 0;

           bool check= int.TryParse(num, out result);
            

            if (check)
            {
                Console.WriteLine(result);

            }
            else
            {
                Console.WriteLine(num);
            }
            
        }
    }
}
