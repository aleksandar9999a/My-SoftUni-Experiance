using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Bonus_Score
{
    class Program
    {
        static void Main(string[] args)
        {
            //Input score
            int number = int.Parse(Console.ReadLine());

            //Bonus score
            double bonus = 0;

            if (number <= 100)
            {
                bonus = 5;
            }
            else if (number > 1000)
            {
                bonus = number * 0.10;
            }
            else
            {
                bonus = number * 0.20;
            }

            //Additional Bonus score
            double bonusAd = 0;

            if (number % 2 == 0)
            {
                bonusAd = 1;
            }
            else if (number % 10 == 5)
            {
                bonusAd = 2;
            }

            //Total Score
            double bonusTotal = bonusAd + bonus;
            double scoreTotal = bonusTotal + number;

            //Output result
            Console.WriteLine(bonusTotal);
            Console.WriteLine(scoreTotal);
        }
    }
}
