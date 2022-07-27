using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace arrayString
{
    internal class Program
    {
        static void Main(string[] args)
        {

            string[] st = new string[5];

            for (int i = 0; i < st.Length; i++)
            {
                Console.WriteLine($"Enter {i} Name ");
                st[i] = Console.ReadLine();
            }
            foreach(string s in st)
            {

                Console.WriteLine(s);
            }
            Console.ReadLine();
        }
    }
}
