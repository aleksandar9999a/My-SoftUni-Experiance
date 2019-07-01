using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Алкохолна_борса
{
    class Program
    {
        static void Main(string[] args)
        {
            double whiskeyPriceL = double.Parse(Console.ReadLine());
            double beerL = double.Parse(Console.ReadLine());
            double vineL = double.Parse(Console.ReadLine());
            double brandyL = double.Parse(Console.ReadLine());
            double whiskeyL = double.Parse(Console.ReadLine());

            double brandyPriceL = whiskeyPriceL / 2;
            double vinePriceL = brandyPriceL - (0.4 * brandyPriceL);
            double beerPriceL = brandyPriceL - (0.8 * brandyPriceL);

            double brandyPrice = brandyL * brandyPriceL;
            double vinePrice = vineL * vinePriceL;
            double beerPrice = beerL * beerPriceL;
            double whiskeyPrice = whiskeyPriceL * whiskeyL;

            double summaryPrice = brandyPrice + vinePrice + beerPrice + whiskeyPrice;

            Console.WriteLine($"{summaryPrice:F2}");

        }
    }
}
