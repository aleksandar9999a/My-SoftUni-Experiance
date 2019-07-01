using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Шивашки_цех
{
    class Program
    {
        static void Main(string[] args)
        {
            int tables = int.Parse(Console.ReadLine());
            double tablesLength = double.Parse(Console.ReadLine());
            double tablesWidth = double.Parse(Console.ReadLine());

            double tablesCover = tables * (tablesLength + 2 * 0.3) * (tablesWidth + 2 * 0.3);
            double tablesSquare = tables * (tablesLength / 2) * (tablesLength / 2);

            double priceUsd = (tablesCover * 7) + (tablesSquare * 9);
            double priceBgn = priceUsd * 1.85;

            Console.WriteLine(String.Format("{0:0.00}", priceUsd) + " USD");
            Console.WriteLine(String.Format("{0:0.00}", priceBgn) + " BGN");
        }
    }
}
