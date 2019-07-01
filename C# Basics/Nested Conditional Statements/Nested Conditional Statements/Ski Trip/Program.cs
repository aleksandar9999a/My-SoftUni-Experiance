using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Ski_Trip
{
    class Program
    {
        static void Main(string[] args)
        {
            double days = double.Parse(Console.ReadLine());
            string type = Console.ReadLine().ToLower();
            string value = Console.ReadLine().ToLower();

            double price = 0;

            if (type == "apartment")
            {
                price = days * 25 - 25;

                if (days > 1 && days <= 10)
                {
                    price = price - price * 0.30;

                    if (value == "positive")
                    {
                        price = price + price * 0.25;
                    }
                    else if (value == "negative")
                    {
                        price = price - price * 0.10;
                    }
                }
                else if (days > 10 && days <= 15)
                {
                    price = price - price * 0.35;

                    if (value == "positive")
                    {
                        price = price + price * 0.25;
                    }
                    else if (value == "negative")
                    {
                        price = price - price * 0.10;
                    }
                }
                else if (days > 15)
                {
                    price = price - price * 0.50;

                    if (value == "positive")
                    {
                        price = price + price * 0.25;
                    }
                    else if (value == "negative")
                    {
                        price = price - price * 0.10;
                    }
                }
            }

            else if (type == "president apartment")
            {
                price = days * 35 - 35;

                if (days > 1 && days <= 10)
                {
                    price = price - price * 0.10;

                    if (value == "positive")
                    {
                        price = price + price * 0.25;
                    }
                    else if (value == "negative")
                    {
                        price = price - price * 0.10;
                    }
                }
                else if (days > 10 && days <= 15)
                {
                    price = price - price * 0.15;

                    if (value == "positive")
                    {
                        price = price + price * 0.25;
                    }
                    else if (value == "negative")
                    {
                        price = price - price * 0.10;
                    }
                }
                else if (days > 15)
                {
                    price = price - price * 0.20;

                    if (value == "positive")
                    {
                        price = price + price * 0.25;
                    }
                    else if (value == "negative")
                    {
                        price = price - price * 0.10;
                    }
                }
            }
            else if (type == "room for one person")
            {
                price = days * 18 - 18;

                if (value == "positive")
                {
                    price = price + price * 0.25;
                }
                else if (value == "negative")
                {
                    price = price - price * 0.10;
                }
            }
            Console.WriteLine("{0:f2}", price);
        }
    }
}
