using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Clever_Lily
{
    class Program
    {
        static void Main(string[] args)
        {
            int age = int.Parse(Console.ReadLine());
            double washPrice = double.Parse(Console.ReadLine());
            int toyPrice = int.Parse(Console.ReadLine());
            int myMoney = 0;
            int moneyYears = 0;
            int toyYears = 0;

            for (int i = 1; i <= age; i++)
            {
                if (i % 2 == 0)
                {
                    moneyYears++;
                }
                else
                {
                    toyYears++;
                }
            }

            for (int i = 1; i <= moneyYears; i++)
            {
                myMoney += 10 * i;
            }

            myMoney += (toyPrice * toyYears) - moneyYears;
            double result = Math.Abs(myMoney - washPrice);

            if (myMoney >= washPrice)
            {
                Console.WriteLine($"Yes! {result:f2}");
            }
            else
            {
                Console.WriteLine($"No! {result:f2}");
            }

        }
    }
}
