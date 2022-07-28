using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace InheriTance
{
    internal class Program
    {
        static void Main(string[] args)
        {
            string CareName = "BMW";
            string ModelNam="7 Series";

            BMW bMW = new BMW();

           // bMW.bmw(CareName, ModelNam);


            bMW.bmW(CareName, ModelNam);

            bMW.getData();

       
            Console.ReadLine(); 


        }
    }
}
