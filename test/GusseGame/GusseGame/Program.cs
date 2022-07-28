using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace GusseGame
{
    internal class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("**** <--WELCOME TO GUSSE THE NUMBER--> *****");
            Console.WriteLine("           ---INSTRACTION---");
            Console.WriteLine();
            Console.WriteLine("1: ENTER YOUR COICE BETWEEN 100");
            Console.WriteLine("2: 'n' FOR QUIT ");
            Console.WriteLine("3: 'y' FOR CONTINUE");
            Console.WriteLine();
            int attem = 1;
            Random r = new Random();
            int rInt = r.Next(0, 100);
            while (true)
            {
                Console.WriteLine("Enter Your choice- ");

                int choice = int.Parse(Console.ReadLine());
                
               
                if (rInt == choice)
                {
                    Console.WriteLine("->->>->Congras You gussed<-<<-<- ");
                    Console.WriteLine("you gussed in "+attem+ " attempts");
                    Console.WriteLine();
                    break;
                }
                else if (rInt > choice)
                {
                    Console.WriteLine("you entered small number ");
                    Console.WriteLine();
                    attem++;
                }
                else if (rInt < choice)
                {
                    Console.WriteLine("you entered bigger number ");
                    Console.WriteLine();
                    attem++;
                }
                Console.WriteLine("Enter Your choice (y/n) - ");
                char ch = Convert.ToChar(Console.ReadLine());
                if (ch == 'y')
                {
                    continue;
                }
                else if(ch == 'n')
                {
                    break;
                }
                else
                {
                    Console.WriteLine("Enter valid input");
                    Console.WriteLine();
                }

            }

        }
    }
}
