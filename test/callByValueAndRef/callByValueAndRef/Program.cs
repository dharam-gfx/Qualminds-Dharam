using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace callByValueAndRef
{
    internal class Program
    {
        public static void callByvalue(int x , int y)
        {
            int a=x;
            int b=y;
            a = 30;
            b = 40;
        }

        public static void callByreferance(int[] Arr)
        {
            int[] ints = Arr;
            ints[0] = 1;   
            ints[1] = 2;
            ints[2] = 3;

        }
        static void Main(string[] args)
        {
            int a = 5;
            int b = 6;

            Console.WriteLine(a+ " , "+ b);

            callByvalue(a, b);
            Console.WriteLine(a + " , " + b);


            int[] arr = { 10, 20, 30, 40 };
            Console.WriteLine(arr[0] + " , " + arr[1]);

            callByreferance(arr);

            Console.WriteLine(arr[0]+" , "+ arr[1]);
            Console.ReadLine();


        }
    }
}
