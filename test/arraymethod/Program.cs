using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace arraymethod
{
    internal class Program
    {
        public static int sumArr(int[] arr){
            int[] Arr = arr;
            int sum=0;
            for(int i = 0; i < Arr.Length; i++)
            {
                sum += Arr[i];
            }
               return sum;
        }
        public static string eckPosOrNeg(int[] n)
        {
            int[] myarr = n;
            bool b = true;
           
            string result="";
            for(int i = 0; i < myarr.Length; i++)
            {
                if(myarr[i] < 0)
                {
                    b = false;

                    result = $"the negative value at posection {i}  = {myarr[i]}";
                    break;

                }
                else
                {
                    result = "not found";
                }
               
            }
            return result;
        }

        static void Main(string[] args)
        {

            int[] arr = { 10, 20,-30, 40 };
            int v = sumArr(arr);

            string res =eckPosOrNeg(arr);
            Console.WriteLine("sum of arry data = "+ v);
            Console.WriteLine(res);
            Console.ReadLine();


        }
    }
}
