using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Small_Shop
{
    class Program
    {
        static void Main(string[] args)
        {
            string productName = Console.ReadLine();
            string city = Console.ReadLine();
            double quantity = double.Parse(Console.ReadLine());
            double price = 0.0;

            if (city == "Sofia")
            {
                if (productName == "coffee")
                {
                    price = 0.50 * quantity;
                    Console.WriteLine(price);
                }
                else if (productName == "water")
                {
                    price = 0.80 * quantity;
                    Console.WriteLine(price);
                }
                else if (productName == "beer")
                {
                    price = 1.20 * quantity;
                    Console.WriteLine(price);
                }
                else if (productName == "sweets")
                {
                    price = 1.45 * quantity;
                    Console.WriteLine(price);
                }
                else if (productName == "peanuts")
                {
                    price = 1.60 * quantity;
                    Console.WriteLine(price);
                }
            }
            else if (city == "Plovdiv")
            {
                if (productName == "coffee")
                {
                    price = 0.40 * quantity;
                    Console.WriteLine(price);
                }
                else if (productName == "water")
                {
                    price = 0.70 * quantity;
                    Console.WriteLine(price);
                }
                else if (productName == "beer")
                {
                    price = 1.15 * quantity;
                    Console.WriteLine(price);
                }
                else if (productName == "sweets")
                {
                    price = 1.30 * quantity;
                    Console.WriteLine(price);
                }
                else if (productName == "peanuts")
                {
                    price = 1.50 * quantity;
                    Console.WriteLine(price);
                }
            }
            else if (city == "Varna")
            {
                if (productName == "coffee")
                {
                    price = 0.45 * quantity;
                    Console.WriteLine(price);
                }
                else if (productName == "water")
                {
                    price = 0.70 * quantity;
                    Console.WriteLine(price);
                }
                else if (productName == "beer")
                {
                    price = 1.10 * quantity;
                    Console.WriteLine(price);
                }
                else if (productName == "sweets")
                {
                    price = 1.35 * quantity;
                    Console.WriteLine(price);
                }
                else if (productName == "peanuts")
                {
                    price = 1.55 * quantity;
                    Console.WriteLine(price);
                }
            }
        }
    }
}
