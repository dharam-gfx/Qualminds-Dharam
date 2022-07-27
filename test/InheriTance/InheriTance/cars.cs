using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace InheriTance
{
    internal class cars
    {
        public string Name;
         public string Model;

        
        public void bmW(string name, string model)
        {
            this.Name = name;
            this.Model = model;
            

           
          // Console.WriteLine(name + " , " + model);

        }
        public void getData()
        {
            Console.WriteLine("getData Method");

            Console.WriteLine(Name);
            Console.WriteLine(Model);
        }


        public cars()
        {
           // getData();
            Console.WriteLine(Name);
            Console.WriteLine(Model);
        }

    }

    internal class BMW :cars
    {
        public BMW()
        {
          
        }

        /*
        public void bmw(string name , string model)
        {

            Console.WriteLine(name+ " , " + model);
            
        }
        */
        
    }
}
