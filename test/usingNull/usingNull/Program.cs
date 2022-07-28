using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace usingNull
{
    internal class Program
    {
        static void Main(string[] args)
        {
            bool? checkGender=null;
          
            if (checkGender == true)
            {
                Console.WriteLine("selected Male");
            }
            else if (checkGender == false)
            {
                Console.WriteLine("selected Female");

            }
            else
            {
                Console.WriteLine("not selected");
            }
        }
    }
}
