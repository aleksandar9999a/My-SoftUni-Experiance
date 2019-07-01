using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Toy_Shop
{
    class Program
    {
        static void Main(string[] args)
        {
            //Input Data
            double excursion = double.Parse(Console.ReadLine());
            double puzzle = double.Parse(Console.ReadLine());
            double doll = double.Parse(Console.ReadLine());
            double bear = double.Parse(Console.ReadLine());
            double mignon = double.Parse(Console.ReadLine());
            double truck = double.Parse(Console.ReadLine());

            //Calculated
            double puzzlePrice = puzzle * 2.60;
            double dollPrice = doll * 3;
            double bearPrice = bear * 4.10;
            double mignonPrice = mignon * 8.20;
            double truckPrice = truck * 2;

            double orders = puzzle + doll + bear + mignon + truck;
            double sumPrice = puzzlePrice + dollPrice + bearPrice + mignonPrice + truckPrice;

            if (orders >= 50)
            {
                sumPrice = sumPrice - sumPrice * 0.25;
            }

            double profit = sumPrice - sumPrice * 0.10;
            double calculate = profit - excursion;

            //Finall
           if (profit >= excursion)
            {
                Console.WriteLine("Yes! {0:f2} lv left.", calculate );
            }
           else
            {
                Console.WriteLine("Not enough money! {0:f2} lv needed.", excursion - profit);
            }
        }
    }
}
