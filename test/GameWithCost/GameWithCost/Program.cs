using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace GameWithCost
{
    internal class Program
    {
        static void Main(string[] args)
        {
            int cost = 0;

            int played=0;
           
            Console.WriteLine(" __          __ ______  _       _____  ____   __  __  ______ ");
            Console.WriteLine(" \\ \\        / /|  ____|| |     / ____|/ __ \\ |  \\/  ||  ____|");
            Console.WriteLine("  \\ \\  /\\  / / | |__   | |    | |    | |  | || \\  / || |__   ");
            Console.WriteLine("   \\ \\/  \\/ /  |  __|  | |    | |    | |  | || |\\/| ||  __|  ");
            Console.WriteLine("    \\  /\\  /   | |____ | |____| |____| |__| || |  | || |____ ");
                Console.Write("     \\/  \\/    |______||______|\\_____|\\____/ |_|  |_||______|");

            Console.WriteLine("--Lets Go.......");


            while (true)
            {
                Console.WriteLine("1: FOOTBOLL");
                Console.WriteLine("2: CRICKET");
                Console.WriteLine("3: BADMINTON");
                Console.WriteLine("4: TABLE TENNIS");
                Console.WriteLine("n: QUIT");
                Console.WriteLine("y: CONTINUE FOR ");
                Console.WriteLine();
                Console.WriteLine("Enter Your Choice :");
                int choice=int.Parse(Console.ReadLine());
                switch (choice)
                {
                    case 1:
                        Console.WriteLine("welcome to footboll");
                        Console.WriteLine();

                        while (true)
                        {
                            Console.WriteLine("pay 50 for play press(y/n):");
                            char check1 = Convert.ToChar(Console.ReadLine());

                        
                            if (check1 == 'y')
                            {
                                cost+=50;
                                played++;
                                continue;
                            }
                            else if (check1 == 'n')
                            {
                                break;
                            }
                           

                            //if (choice == 1)
                            //{
                            //    goto LoopEnd;
                            //} ;
                        }
                        break;
                    case 2:
                        Console.WriteLine("welcome to Cricket");
                        Console.WriteLine();

                        while (true)
                        {
                            Console.WriteLine("pay 100 for play press(y/n):");
                            char check1 = Convert.ToChar(Console.ReadLine());


                            if (check1 == 'y')
                            {
                                cost += 100;
                                played++;
                                continue;
                            }
                            else if (check1 == 'n')
                            {
                                break;
                            }
                        }
                        break ;
                    case 3:
                        Console.WriteLine("welcome to Badminton");
                        Console.WriteLine();

                        while (true)
                        {
                            Console.WriteLine("pay 150 for play press(y/n):");
                            char check1 = Convert.ToChar(Console.ReadLine());


                            if (check1 == 'y')
                            {
                                cost += 150;
                                played++;
                                continue;
                            }
                            else if (check1 == 'n')
                            {
                                break;
                            }
                        }
                        break;
                    case 4:
                        Console.WriteLine("welcome to Table Tennis");
                        Console.WriteLine();

                        while (true)
                        {
                            Console.WriteLine("pay 200 for play press(y/n):");
                            char check1 = Convert.ToChar(Console.ReadLine());


                            if (check1 == 'y')
                            {
                                cost += 200;
                                played++;
                                continue;
                            }
                            else if (check1 == 'n')
                            {
                                break;
                            }
                        }
                        break;
                    default: Console.WriteLine("inviled input");
                        break;
                }
                Console.WriteLine("do you want to continue press(y/n):");
                char check = Convert.ToChar(Console.ReadLine());
                if(check == 'y')
                {
                    continue;
                }
                else if(check == 'n')
                {
                    break;
                }
                
            }
            Console.WriteLine("\n you total investad "+ cost +"$ and Played "+played +" times");
            Console.WriteLine();
         
            Console.WriteLine(".▀█▀.█▄█.█▀█.█▄.█.█▄▀　█▄█.█▀█.█─█");
            Console.WriteLine("─.█.─█▀█.█▀█.█.▀█.█▀▄　─█.─█▄█.█▄█");

            
        }
    }
}
