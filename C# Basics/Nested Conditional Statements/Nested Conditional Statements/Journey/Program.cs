using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Volleyball
{
    class Program
    {
        static void Main(string[] args)
        {
            string year = Console.ReadLine();
            double p = double.Parse(Console.ReadLine());
            double h = double.Parse(Console.ReadLine());

            double weekend = 48 - h;
            weekend = weekend * 3 / 4;

            double happyDay = p * 2 / 3;
            double days = weekend + happyDay + h;

            if (year == "leap")
            {
                days = days + days * 0.15;
                days = Math.Floor(days);
                Console.WriteLine(days);
            }
            else if ( year == "normal")
            {
                days = Math.Floor(days);
                Console.WriteLine(days);
            }
        }
    }
}
