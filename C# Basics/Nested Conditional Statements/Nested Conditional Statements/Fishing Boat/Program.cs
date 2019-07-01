using System;

namespace Fishing_Boat
{
    class Program
    {
        static void Main(string[] args)
        {
            double groupBudget = double.Parse(Console.ReadLine());
            string season = Console.ReadLine();
            double count = double.Parse(Console.ReadLine());

            double currentPrice = 0;
            double finalcurrentPrice = 0;

            if (season == "Spring")
            {
                currentPrice = 3000;

                if (count <= 6)
                {
                    finalcurrentPrice = currentPrice - currentPrice * 0.1;
                    if (count % 2 == 0)
                    {
                        finalcurrentPrice = finalcurrentPrice - finalcurrentPrice * 0.05;
                    }
                }
                else if (count >= 7 && count < 12)
                {
                    finalcurrentPrice = currentPrice - currentPrice * 0.15;
                    if (count % 2 == 0)
                    {
                        finalcurrentPrice = finalcurrentPrice - finalcurrentPrice * 0.05;
                    }
                }
                else if (count >= 12)
                {
                    finalcurrentPrice = currentPrice - currentPrice * 0.25;
                    if (count % 2 == 0)
                    {
                        finalcurrentPrice = finalcurrentPrice - finalcurrentPrice * 0.05;
                    }
                }
            }

            else if (season == "Summer")
            {
                currentPrice = 4200;

                if (count <= 6)
                {
                    finalcurrentPrice = currentPrice - currentPrice * 0.1;
                    if (count % 2 == 0)
                    {
                        finalcurrentPrice = finalcurrentPrice - finalcurrentPrice * 0.05;
                    }
                }
                else if (count >= 7 && count < 12)
                {
                    finalcurrentPrice = currentPrice - currentPrice * 0.15;
                    if (count % 2 == 0)
                    {
                        finalcurrentPrice = finalcurrentPrice - finalcurrentPrice * 0.05;
                    }
                }
                else if (count >= 12)
                {
                    finalcurrentPrice = currentPrice - currentPrice * 0.25;
                    if (count % 2 == 0)
                    {
                        finalcurrentPrice = finalcurrentPrice - finalcurrentPrice * 0.05;
                    }
                }
            }

            else if (season == "Autumn")
            {
                currentPrice = 4200;

                if (count <= 6)
                {
                    finalcurrentPrice = currentPrice - currentPrice * 0.1;
                }
                else if (count >= 7 && count < 12)
                {
                    finalcurrentPrice = currentPrice - currentPrice * 0.15;
                }
                else if (count >= 12)
                {
                    finalcurrentPrice = currentPrice - currentPrice * 0.25;
                }
            }

            else if (season == "Winter")
            {
                currentPrice = 2600;

                if (count <= 6)
                {
                    finalcurrentPrice = currentPrice - currentPrice * 0.1;
                    if (count % 2 == 0)
                    {
                        finalcurrentPrice = finalcurrentPrice - finalcurrentPrice * 0.05;
                    }
                }
                else if (count >= 7 && count < 12)
                {
                    finalcurrentPrice = currentPrice - currentPrice * 0.15;
                    if (count % 2 == 0)
                    {
                        finalcurrentPrice = finalcurrentPrice - finalcurrentPrice * 0.05;
                    }
                }
                else if (count >= 12)
                {
                    finalcurrentPrice = currentPrice - currentPrice * 0.25;
                    if (count % 2 == 0)
                    {
                        finalcurrentPrice = finalcurrentPrice - finalcurrentPrice * 0.05;
                    }
                }
            }

            if (finalcurrentPrice <= groupBudget)
            {
                Console.WriteLine("Yes! You have {0:f2} leva left.", groupBudget - finalcurrentPrice);
            }
            else
            {
                Console.WriteLine("Not enough money! You need {0:f2} leva.", finalcurrentPrice - groupBudget);
            }
        }
    }
}
