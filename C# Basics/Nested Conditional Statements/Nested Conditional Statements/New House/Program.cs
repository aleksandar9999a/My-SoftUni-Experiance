using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace New_House
{
    class Program
    {
        static void Main(string[] args)
        {
            string type = Console.ReadLine();
            double flowers = double.Parse(Console.ReadLine());
            double budget = double.Parse(Console.ReadLine());

            double price = 0;
            double discount = 0;

            if (type == "Roses")
            {
                if (flowers > 80)
                {
                    price = flowers * 5;
                    discount = price - price * 0.1;
                    if (budget >= discount)
                    {
                        Console.WriteLine("Hey, you have a great garden with {0} {1} and {2} leva left.", flowers, type, budget - discount);
                    }
                    else
                    {
                        Console.WriteLine("Not enough money, you need {0:f2} leva more.", discount - budget);
                    }
                }
                else
                {
                    price = flowers * 5;
                    if (budget >= price)
                    {
                        Console.WriteLine("Hey, you have a great garden with {0} {1} and {2:f2} leva left.", flowers, type, budget - price);
                    }
                    else
                    {
                        Console.WriteLine("Not enough money, you need {0:f2} leva more.", price - budget);
                    }
                }
            }

            else if (type == "Dahlias")
            {
                if (flowers > 90)
                {
                    price = flowers * 3.80;
                    discount = price - price * 0.15;
                    if (budget >= discount)
                    {
                        Console.WriteLine("Hey, you have a great garden with {0} {1} and {2:f2} leva left.", flowers, type, budget - discount);
                    }
                    else
                    {
                        Console.WriteLine("Not enough money, you need {0:f2} leva more.", discount - budget);
                    }
                }
                else
                {
                    price = flowers * 3.80;
                    if (budget >= price)
                    {
                        Console.WriteLine("Hey, you have a great garden with {0} {1} and {2:f2} leva left.", flowers, type, budget - price);
                    }
                    else
                    {
                        Console.WriteLine("Not enough money, you need {0:f2} leva more.", price - budget);
                    }
                }
            }

            else if (type == "Tulips")
            {
                if (flowers > 80)
                {
                    price = flowers * 2.80;
                    discount = price - price * 0.15;
                    if (budget >= discount)
                    {
                        Console.WriteLine("Hey, you have a great garden with {0} {1} and {2:f2} leva left.", flowers, type, budget - discount);
                    }
                    else
                    {
                        Console.WriteLine("Not enough money, you need {0:f2} leva more.", discount - budget);
                    }
                }
                else
                {
                    price = flowers * 2.80;
                    if (budget >= price)
                    {
                        Console.WriteLine("Hey, you have a great garden with {0} {1} and {2:f2} leva left.", flowers, type, budget - price);
                    }
                    else
                    {
                        Console.WriteLine("Not enough money, you need {0:f2} leva more.", price - budget);
                    }
                }
            }

            else if (type == "Narcissus")
            {
                if (flowers < 120)
                {
                    price = flowers * 3;
                    discount = price + price * 0.15;
                    if (budget >= discount)
                    {
                        Console.WriteLine("Hey, you have a great garden with {0} {1} and {2:f2} leva left.", flowers, type, budget - discount);
                    }
                    else
                    {
                        Console.WriteLine("Not enough money, you need {0:f2} leva more.", discount - budget);
                    }
                }
                else
                {
                    price = flowers * 3;
                    if (budget >= price)
                    {
                        Console.WriteLine("Hey, you have a great garden with {0} {1} and {2:f2} leva left.", flowers, type, budget - price);
                    }
                    else
                    {
                        Console.WriteLine("Not enough money, you need {0:f2} leva more.", price - budget);
                    }
                }
            }

            else if (type == "Gladiolus")
            {
                if (flowers < 80)
                {
                    price = flowers * 2.50;
                    discount = price + price * 0.20;
                    if (budget >= discount)
                    {
                        Console.WriteLine("Hey, you have a great garden with {0} {1} and {2:f2} leva left.", flowers, type, budget - discount);
                    }
                    else
                    {
                        Console.WriteLine("Not enough money, you need {0:f2} leva more.", discount - budget);
                    }
                }
                else
                {
                    price = flowers * 2.50;
                    if (budget >= price)
                    {
                        Console.WriteLine("Hey, you have a great garden with {0} {1} and {2:f2} leva left.", flowers, type, budget - price);
                    }
                    else
                    {
                        Console.WriteLine("Not enough money, you need {0:f2} leva more.", price - budget);
                    }
                }
            }
        }
    }
}
