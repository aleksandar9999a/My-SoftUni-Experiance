using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Благотворителна_кампания
{
    class Program
    {
        static void Main(string[] args)
        {

            double days = double.Parse(Console.ReadLine());
            double peoples = double.Parse(Console.ReadLine());
            double cakes = double.Parse(Console.ReadLine());
            double waffles = double.Parse(Console.ReadLine());
            double pancakes = double.Parse(Console.ReadLine());

            double cakeMoney = cakes * 45;
            double wafflesMoney = waffles * 5.80;
            double pancakeMoney = pancakes * 3.20;

            double allMoney = peoples * days * (cakeMoney + wafflesMoney + pancakeMoney);
            double myMoney = allMoney - (allMoney * 1/8);

            Console.WriteLine($"{myMoney:F2}");

        }
    }
}
