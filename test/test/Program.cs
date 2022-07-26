using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace test
{
    internal class Program
    {
        static void Main(string[] args)
        {
            //tring st=Console.ReadLine();
            //Console.WriteLine(st);

            /*
            int num = 32;
            Console.WriteLine(num);

            bool check=true;
            Console.WriteLine(check);

            float f = 23.43F;
            Console.WriteLine(f);

            double d = 455.45433D;
            Console.WriteLine(d);

            char c = 'a';
            Console.WriteLine(c);
            string s = "hello guru ji";
            Console.WriteLine(s);
            */

            // type Casting 

            int num2 = (int)3.54;
            Console.WriteLine(num2);

            // two type of type casting
            // 1 implicit Casting
            //2 explicit Casting

            // 1 implicit -> char -> int -> long -> float -> double 

            // Example 

            char ch = 'A';
            int num3 = ch;
            long l = num3;
            float f = l;
            double d = f;
            //string str = d;

            Console.WriteLine(ch);
            Console.WriteLine(num3);
            //Console.WriteLine(l);
            //Console.WriteLine(f);
            //Console.WriteLine(d);

            //onsole.WriteLine("hello world ");
            //Console.WriteLine("hello dharm");
            Console.ReadLine();


        }
    }
}
