using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Journey_2
{
    class Program
    {
        static void Main(string[] args)
        {
            //Input season and money
            double budget = double.Parse(Console.ReadLine());
            string season = Console.ReadLine().ToLower();

            double price = 0;

            //What is season??
            if (season == "summer")
            {
                if (budget <= 100)
                {
                    Console.WriteLine("Somewhere in Bulgaria");
                    price = Math.Round(budget * 0.3, 2);
                    Console.WriteLine("Camp - {0:f2}", price);
                }

                else if ( budget <= 1000)
                {
                    Console.WriteLine("Somewhere in Balkans");
                    price = Math.Round(budget * 0.4, 2);
                    Console.WriteLine("Camp - {0:f2}", price);
                }

                else if (budget > 1000)
                {
                    Console.WriteLine("Somewhere in Europe");
                    price = Math.Round(budget * 0.9, 2);
                    Console.WriteLine("Hotel - {0:f2}", price);
                }
            }

            else if (season == "winter")
            {
                if (budget <= 100)
                {
                    Console.WriteLine("Somewhere in Bulgaria");
                    price = Math.Round(budget * 0.7, 2);
                    Console.WriteLine("Hotel - {0:f2}", price);
                }

                else if (budget <= 1000)
                {
                    Console.WriteLine("Somewhere in Balkans");
                    price = Math.Round(budget * 0.8, 2);
                    Console.WriteLine("Hotel - {0:f2}", price);
                }

                else if (budget > 1000)
                {
                    Console.WriteLine("Somewhere in Europe");
                    price = Math.Round(budget * 0.9, 2);
                    Console.WriteLine("Hotel - {0:f2}", price);
                }
            }
        }
    }
}
